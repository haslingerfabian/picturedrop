/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/user.controller'
import { UsersService } from './services/user.service'
import { VouchersController } from './controllers/voucher.controller'
import { VouchersService } from './services/voucher.service'
import { Vouchers } from './entities/voucher.entity';
import { SubmissionItem } from './entities/submissionitem.entity';
import { SubmissionItemController } from './controllers/submissionItem.controller';
import { SubmissionItemService } from './services/submissionitem.service';
import { Workspace } from './entities/workspaces.entity';
import { WorkspacesController } from './controllers/workspace.controller';
import { WorkspaceService } from './services/workspaces.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [User,Vouchers,SubmissionItem, Workspace],
      synchronize: false,
    }),
     TypeOrmModule.forFeature([User,Vouchers,SubmissionItem, Workspace]),
  ],
  controllers: [AppController,  UsersController, VouchersController,SubmissionItemController, WorkspacesController],
  providers:[AppService, UsersService, VouchersService,SubmissionItemService, WorkspaceService]
})

export class AppModule {}


/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
      entities: [Vouchers,SubmissionItem, Workspace],
      synchronize: false,
    }),
     TypeOrmModule.forFeature([Vouchers,SubmissionItem, Workspace]),
  ],
  controllers: [AppController, VouchersController,SubmissionItemController, WorkspacesController],
  providers:[AppService, VouchersService,SubmissionItemService, WorkspaceService]
})

export class AppModule {}


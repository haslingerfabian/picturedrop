/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/user.controller'
import { UsersService } from './services/user.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [User],
      synchronize: false,
    }),
     TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController,  UsersController],
  providers:[AppService, UsersService]
})

export class AppModule {}


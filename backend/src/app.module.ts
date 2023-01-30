import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "./todo/todo.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    username: 'root',
    password: 'admin',
    database:'todo-app-db',
    entities: [Todo],
    synchronize: true
  }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


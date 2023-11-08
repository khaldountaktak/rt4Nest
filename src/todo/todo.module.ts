import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from './todo.entity';
import { ToDoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ToDoEntity])], providers: [ToDoService], controllers: [TodoController],
})
export class TodoModule { }

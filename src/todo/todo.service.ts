import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoEntity } from './todo.entity';
import { Like, QueryBuilder, Repository } from 'typeorm';
import { TodoDto } from 'src/dto/todo.dto';
import { updateTodoDto } from 'src/dto/updateTodo.dto';
import { StatusEnum } from './status.enum';

@Injectable()
export class ToDoService {
    constructor(
        @InjectRepository(ToDoEntity)
        private readonly todoRepository: Repository<ToDoEntity>,
    ) {}
    addTodo(todo : TodoDto) {
        return this.todoRepository.save(todo);
    }

    updateTodo(id: number , updatedTodo: updateTodoDto) {
        return this.todoRepository.update(id, updatedTodo)

    }

    removeTodo(id: number) {
        return this.todoRepository.delete(id)
    }

    removeSoftTodo(id : number) {
        return this.todoRepository.softDelete(id)
    }
    async restoreTodo(id: number){
  const todoToRecover = await this.todoRepository.find({
    where:{
        id,
    }
  });       console.log(id, todoToRecover);
       
        return  this.todoRepository.recover(todoToRecover)
    }

    async countTodo(){
    const statusCounts = {};

    const todos = await this.todoRepository.find();
    todos.forEach((todo) => {
      if (statusCounts[todo.status]) {
        statusCounts[todo.status]++;
      } else {
        statusCounts[todo.status] = 1;
      }
    });

    return statusCounts;
  }

  
  getTodos(){
    return this.todoRepository.find()
}

// getTodosPagination(){
//     const queryBuilder = this.todoRepository.createQueryBuilder("to_do_entity")
//     return queryBuilder.select().take(2)
// }

async getTodosPagination(page: number, pageSize: number) {
    const offset = (page - 1) * pageSize;

    const queryBuilder = this.todoRepository.createQueryBuilder('to_do_entity');
    const todos = await queryBuilder.select().skip(offset).take(pageSize).getMany();

    return todos;
  }



async getTodoById( id: number){
  const todo = await this.todoRepository.find({
    where:{
        id,
    }
  });

  if (!todo) {
    throw new NotFoundException(`Le Todo avec l'ID ${id} n'a pas été trouvé.`);
  }

  return todo;
}

    async findTodo(keyword: string, status: StatusEnum){
        const whereConditions: any = {};

        if (keyword) {
            whereConditions.name = Like(`%${keyword}%`);
           // whereConditions.description = Like(`%${keyword}%`);
          }
      
          if (status) {
            whereConditions.status = status;
          }
      
          return  await this.todoRepository.find({
            where: whereConditions,
          });
        // return this.todoRepository.find({
        //     where:{
        //         name: Like(`%${keyword}%`),
        //     }
        //   });

        

    }


}


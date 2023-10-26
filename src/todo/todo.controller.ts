import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { ToDoService } from './todo.service';
import { TodoDto } from 'src/dto/todo.dto';
import { updateTodoDto } from 'src/dto/updateTodo.dto';
import { pipe } from 'rxjs';
import { StatusEnum } from './status.enum';
import { stat } from 'fs';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: ToDoService){}

    @Post()
    addTodo(@Req() req, @Body() newTodo: TodoDto) {
        const userId = req.user;
        return this.todoService.addTodo(newTodo,userId)
    }

    @Put(":id")
    updateTodo(@Req() req ,@Body() updatedTodo: updateTodoDto, @Param("id",ParseIntPipe) id: number){
        const userId = req.user;
        return this.todoService.updateTodo(id,updatedTodo, userId)
    }

    @Delete(":id")
    deleteTodo(@Req() req, @Param("id",ParseIntPipe) id: number){
        const userId = req.user;
        return this.todoService.removeTodo(id,userId)
    }

    @Delete("/soft/:id")
    softDeleteTodo(@Param("id",ParseIntPipe) id: number){
        return this.todoService.removeSoftTodo(id)
    }

    @Put("/recover/:id")
    restoreTodo(@Param("id",ParseIntPipe) id: number){
        return this.todoService.restoreTodo(id)
    }

    @Get("/count")
    getCount(){
        return this.todoService.countTodo()
    }

    @Get()
    getTodos(){
        return this.todoService.getTodos()
    }

    @Get(":id")
    getTodoById(@Param("id",ParseIntPipe) id: number){
        return this.todoService.getTodoById(id)
    }

    @Get("/find")
    findTodo(@Query('keyword') keyword: string,
    @Query('status') status: StatusEnum){
        return this.todoService.findTodo(keyword,status)
    }

    // @Get("pagination")
    // getPage(){
    //     return this.todoService.getTodosPagination()
    // }
    @Get('pagination')
   async getPage(
      @Query('page') page: number = 1,
      @Query('pageSize') pageSize: number = 10, 
    ) {
      return this.todoService.getTodosPagination(page, pageSize);
    }

}



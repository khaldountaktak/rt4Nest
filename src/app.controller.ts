import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDto } from './dto/todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() myBody: TodoDto): string {
    // console.log(typeof TodoDto);
    
    return this.appService.getHello();
  }

  
}

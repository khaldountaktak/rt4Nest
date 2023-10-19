import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [CommonModule, TestModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port : 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    autoLoadEntities: true,
    synchronize: true,
  }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
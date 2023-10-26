import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TestModule } from './test/test.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { UserModule } from './user/user.module';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { Cv } from './cv/entities/cv.entity';
import { ToDoEntity } from './todo/todo.entity';
import { User } from './user/entities/user.entity';
import { Skill } from './skill/entities/skill.entity';

@Module({
  imports: [CommonModule, TestModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [Cv, ToDoEntity, User, Skill],
    synchronize: true,
  }), TodoModule, UserModule, CvModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: 'todo', method: RequestMethod.POST },
      { path: 'todo', method: RequestMethod.PUT }, 
      { path: 'todo', method: RequestMethod.DELETE },
    )
  }
}

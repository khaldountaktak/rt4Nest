import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';
import { BaseController } from './base.controller';
import { Cv } from '../cv/entities/cv.entity';
import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BaseEntity])], 
    providers: [BaseService,Repository, Object], 
    controllers: [BaseController]
})
export class BaseModule { }

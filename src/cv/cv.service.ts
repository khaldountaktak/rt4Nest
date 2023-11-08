import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';
import { GenericServiceImpl } from '../Generic/GeenericImpl.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';




@Injectable()
export class CvService extends BaseService<Cv> {
  constructor(
    @InjectRepository(Cv)
    private readonly cvRepository: Repository<Cv>,
  ) {
    super(cvRepository);
  }
}

/*
@Injectable()
export class CvService {
  create(createCvDto: CreateCvDto) {
    return 'This action adds a new cv';
  }

  findAll() {
    return `This action returns all cv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}*/

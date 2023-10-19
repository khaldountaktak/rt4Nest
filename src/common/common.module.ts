import { Module } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import { UUID_STRING } from 'src/constants/constants';
@Module({
  providers: [{provide: UUID_STRING, useValue: uuidv4}],
  exports: [UUID_STRING],
})
export class CommonModule {}

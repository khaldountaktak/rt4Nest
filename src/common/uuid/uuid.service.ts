import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UuidService {

    generateUuid(): string {
        const myuuid = uuidv4()
        return myuuid
    }

}

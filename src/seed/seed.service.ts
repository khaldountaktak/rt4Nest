import { Injectable } from '@nestjs/common';
import { randEmail, randFullName } from '@ngneat/falso';

@Injectable()
export class SeedService {


    getEmail(): string[]{
        return randEmail({ length: 10 })
    }

}

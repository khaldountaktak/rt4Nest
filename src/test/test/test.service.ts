import { Inject, Injectable } from '@nestjs/common';
import { UUID_STRING } from '../../constants/constants';
@Injectable()
export class TestService {
    constructor(@Inject(UUID_STRING) private readonly uuidService: string) {}

    generateUuid () : string {
        return this.uuidService
    }

}

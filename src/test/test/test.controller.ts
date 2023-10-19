import { Controller, Get, Inject } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(@Inject("UuidService") private readonly testService : string) {}
    @Get()
    testServ() : string {
        return this.testService
    }

}

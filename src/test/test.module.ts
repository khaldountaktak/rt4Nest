import { Module } from '@nestjs/common';
import { TestService } from './test/test.service';
import { CommonModule } from 'src/common/common.module';
import { TestController } from './test/test.controller';

@Module({
  providers: [TestService],
  imports: [CommonModule],
  controllers: [TestController]
})
export class TestModule {}

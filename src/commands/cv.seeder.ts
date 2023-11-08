import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeedService } from '../seed/seed.service';
import { randDirectoryPath, randFirstName, randJobTitle, randLastName, randNumber } from '@ngneat/falso';
import { CvService } from '../cv/cv.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const cvService = app.get(CvService);
    
    const user = {
        id :"5",
        lastName: randLastName(),
        firstName: randFirstName(),
        age: randNumber({ min: 18, max: 100 }),
        cin: randNumber({ length: 8 }),
        job: randJobTitle(),
        path: randDirectoryPath()
    };
  
    // Wait for the create operation to complete before closing the app context.
    await cvService.create(user);
    await app.close();
  }
  bootstrap();
  

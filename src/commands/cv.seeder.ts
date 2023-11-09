import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeedService } from '../seed/seed.service';
import { randDirectoryPath, randFirstName, randJobTitle, randLastName, randNumber } from '@ngneat/falso';
import { CvService } from '../cv/cv.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const cvService = app.get(CvService);
    
    const user = {

        lastname: randLastName(),
        firstname: randFirstName(),
        age: randNumber({min: 18, max: 99}),
        cin: 10000000 + randNumber({min:0, max:9999999}),
        job: randJobTitle(),
        path: randDirectoryPath()
    };
    console.log(user);
    console.log(randNumber());
    
  
    // Wait for the create operation to complete before closing the app context.
    await cvService.create(user);
    await app.close();
  }
  bootstrap();
  

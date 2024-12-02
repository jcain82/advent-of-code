import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Setup Handlebars Template Engine
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // The directory where templates will be stored
  app.setViewEngine('hbs');

  await app.listen(3000);
}

bootstrap();

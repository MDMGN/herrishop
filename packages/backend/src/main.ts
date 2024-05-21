import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.setGlobalPrefix(`api/${process.env.API_VERSION}`)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();

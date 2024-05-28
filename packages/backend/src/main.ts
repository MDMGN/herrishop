import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.setGlobalPrefix(`api/${process.env.API_VERSION || 'v1'}`)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000,'0.0.0.0');
}
bootstrap();

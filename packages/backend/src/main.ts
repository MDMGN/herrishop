import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as hbs from 'hbs'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.enableCors()

  app.setGlobalPrefix(`api/${ process.env.API_VERSION || 'v1'}`,{
    exclude: [
      {
        path: 'verify', method: RequestMethod.GET
      }
    ]
  })

  const config = new DocumentBuilder()
  .setTitle('HerriShop API Example')
  .setDescription('Api Endpoints')
  .setVersion('1.0')
  .addTag('api')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())
  app.setViewEngine('hbs');
  app.setBaseViewsDir(join(__dirname, 'views'));
  hbs.registerPartials(join(__dirname, 'views/partials'));
  await app.listen(3000,'0.0.0.0');
}
bootstrap();

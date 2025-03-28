/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  //Swagger Config:
  const config = new DocumentBuilder()
  .setTitle('Picturedrop - Admin Panel')
  .setDescription('Picturedrop Swagger Documentation')
  .setVersion('1.0')
  .build();

  //Swagger Document:
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.use('/swagger/json', (req, res) => { res.json(document) });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(1500);
}
bootstrap();

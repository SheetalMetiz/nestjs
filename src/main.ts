import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new FastifyAdapter());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

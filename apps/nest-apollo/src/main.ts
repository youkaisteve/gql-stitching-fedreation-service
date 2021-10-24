import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express'
import { getApp } from './graph.express'

async function bootstrap() {
  const expressApp = await getApp()
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init()
}
bootstrap();

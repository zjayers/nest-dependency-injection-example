import { NestApplication, NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';
import { Logger } from '@nestjs/common';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(PORT);

  new Logger(NestApplication.name).log(`App listenting on port: ${PORT}`);
}

bootstrap();

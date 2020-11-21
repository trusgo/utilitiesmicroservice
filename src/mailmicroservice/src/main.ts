import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Transport, ClientOptions, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// Need to move to .env file
const PORT: number = Number(process.env.PORT) || 8803;

// Create logger instance
const logger = new Logger('Main');

const microserviceClientOptions: ClientOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: PORT,
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceClientOptions,
  )

  await app.listen(() =>
    logger.log(`Email Microservice is listening at port: ${PORT}`),
  )
}
bootstrap()

require('dotenv').config({ path: '.env' })
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Transport,
  ClientOptions,
  MicroserviceOptions,
} from '@nestjs/microservices';
import 'dotenv/config';

const PORT: number = parseInt(process.env.PORT, 10)

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
  );

  await app.listen(() =>
    console.log(`Email Microservice is listening at port: ${PORT}`),
  );
}
bootstrap();

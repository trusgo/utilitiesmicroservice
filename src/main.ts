import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Transport,
  ClientOptions,
  MicroserviceOptions,
} from '@nestjs/microservices';

const PORT: number = Number(process.env.PORT) || 8809;
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

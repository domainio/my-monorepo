/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { TodosModule } from './todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TodosModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'my_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen();
}

bootstrap();

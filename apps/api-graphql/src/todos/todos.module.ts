import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [GraphQLModule.forRoot({
    playground: true,
    autoSchemaFile: true,
  }),
  ClientsModule.register([{
    name: 'RMQ_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'my_queue',
      queueOptions: {
        durable: false
      }
    }
  }])],
  providers: [TodosResolver, TodosService]
})
export class TodosModule { }

import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot({
    playground: true,
    autoSchemaFile: true,
  })],
  providers: [TodosResolver, TodosService]
})
export class TodosModule { }

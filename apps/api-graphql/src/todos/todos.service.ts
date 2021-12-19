import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(@Inject('RMQ_SERVICE') private client: ClientProxy) { }

  private todos: Todo[] = [];

  create(createTodoInput: CreateTodoInput) {

    const newTodo = new Todo();
    newTodo.name = createTodoInput.name;
    newTodo.id = this.todos.length + 1;
    this.todos.push(newTodo);
    this.client.emit('createTodo', newTodo);
    console.log('This action adds a new todo', JSON.stringify(newTodo));
    return newTodo;
  }

  findAll() {
    console.log(`This action returns all todos`);
    return this.todos;
  }

  findOne(id: number) {
    const res = this.todos.find(todo => todo.id);
    console.log(`This action returns a #${id} todo, result`, res);
    return res;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}

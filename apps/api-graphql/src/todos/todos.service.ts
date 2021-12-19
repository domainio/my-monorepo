import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  create(createTodoInput: CreateTodoInput) {
    console.log('This action adds a new todo', JSON.stringify(createTodoInput));
    const newTodo = new Todo();
    newTodo.name = createTodoInput.name;
    newTodo.id = this.todos.length + 1;
    this.todos.push(newTodo);
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

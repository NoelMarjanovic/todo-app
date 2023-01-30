import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private repo: Repository<Todo>) {
  }
  createTodo(title: string, description: string) {
    const todo = this.repo.create({title, description});
    return this.repo.save(todo);
  }

  deleteTodo(id: number) {
    return this.repo.delete(id);
  }
}

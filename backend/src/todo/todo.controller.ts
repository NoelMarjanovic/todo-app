import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {CreateTodoDto} from "./dtos/create-todo.dto";

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {
    }
    @Post('create')
    createTodo(@Body() body: CreateTodoDto) {
        return this.todoService.createTodo(body.title, body.description);
    }

    @Get('delete=:id')
    deleteTodo(@Param('id') id: string) {
        return this.todoService.deleteTodo(parseInt(id));
    }
}

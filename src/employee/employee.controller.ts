import { Body, Controller, Get, Post } from "@nestjs/common";
import { interval, map, Observable, of } from "rxjs";
import { EmployeeService } from "./employee.service";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
  }


@Controller('employee')
export class EmployeeController {
    private todos: Todo[] = [];
    constructor(
        private readonly employeeService: EmployeeService
    ) {}

    @Get()
    getAllTodos(): Observable<Todo[]> {
        return new Observable(observable => {
            observable.next(this.todos);
            observable.complete();
        });
    }

    @Post()
    createTodo(@Body() todo: Todo): Observable<Todo> {
      return new Observable(observer => {
        this.todos.push(todo);
        observer.next(todo);
        observer.complete();
      });
    }
}
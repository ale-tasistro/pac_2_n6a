import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../types';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [];
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.index().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  randomMethod() {}
}

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
  filteredTodos: Todo[] = [];
  searchString: string = '';
  validationMessage: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.index().subscribe((data: Todo[]) => {
      this.todos = data;
      this.filteredTodos = data;
    });
  }

  search(): void {
    if (!this.searchString) {
      this.filteredTodos = this.todos;
    } else if (this.searchString.length < 2) {
      this.validationMessage = 'Search term must be at least 2 characters long.';
    } else {
      this.validationMessage = '';
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    }
  }
}

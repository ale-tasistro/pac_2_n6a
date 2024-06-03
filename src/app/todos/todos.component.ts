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

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.index().subscribe((data: Todo[]) => {
      this.todos = data;
      this.filteredTodos = this.todos;
    });
  }

  search(): void {
    if (this.searchString != '') {
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    } else {
      this.filteredTodos = this.todos;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../types';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo | null = null;

  constructor(private route: ActivatedRoute, private todosService: TodosService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todosService.show(+id).subscribe((data: Todo) => {
        this.todo = data;
      });
    } else {
      console.error('Missing id');
    }
  }
}

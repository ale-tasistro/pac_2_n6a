import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  index(): Observable<Todo[]> {
    const indexEnpodint = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(indexEnpodint);
  }
}

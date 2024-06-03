import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './types';

const baseUrl = 'https://jsonplaceholder.typicode.com';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  index(): Observable<Todo[]> {
    const indexEnpodint = `${baseUrl}/todos`;
    return this.http.get<Todo[]>(indexEnpodint);
  }

  show(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}/todos/${id}`);
  }
}

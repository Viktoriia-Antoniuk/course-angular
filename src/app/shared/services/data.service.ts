import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) { }

  getAllTodo(): Observable<Todo []> {
    return this.http.get<Todo []>(this.urlApi);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.urlApi + id);
  }

  addNewTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.urlApi, todo);
  }

  editTodo(todo: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(this.urlApi + id, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.urlApi + id);
  }
}

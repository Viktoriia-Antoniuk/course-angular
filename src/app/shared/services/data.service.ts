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
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Todo } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/' + id);
  }
}

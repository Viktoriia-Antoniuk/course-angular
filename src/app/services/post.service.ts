import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(data: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', data);
  }

  deletePost(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}

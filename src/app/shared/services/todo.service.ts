import { Injectable } from '@angular/core';
import { Todo } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: Todo[] = [];
  // todo: Todo[] = [{
  //   name: 'Task 1',
  //   complete: true
  // }, {
  //   name: 'Task 2',
  //   complete: false
  // }, {
  //   name: 'Task 3',
  //   complete: false
  // }];

  constructor() {
    if (localStorage.getItem('todo')){
     this.todo = JSON.parse(localStorage.getItem('todo'));
    }
   }
  getTodo() {
    return this.todo;
  }
  
  addTodoStorage(todo) {
    this.todo.push({
      name: todo.name,
      complete: false
    });
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  deleteTodo(i: number) {
    this.todo.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  updateItemTodo(event) {
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../shared/models/product.model';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: Todo[];

  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      name: ''
    });
    this.todo = this.todoService.getTodo();
  }

  addTodo() {
    console.log(this.todoForm.value);
    this.todoService.addTodoStorage(this.todoForm.value);
    this.todoForm = this.fb.group({
      name: ''
    });
  }

  updateItemTodo(event) {
    console.log(event.currentTarget.checked);
    this.todoService.updateItemTodo(event);
  }

  deleteTodo(i) {
    this.todoService.deleteTodo(i);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @Input() todo: Todo;
  @Input() textButton: string;
  @Output() sendForm = new EventEmitter();
  
  minDate = new Date();
  newTodo: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newTodo = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      completed: [false]
    });
    if (this.todo) {
      this.newTodo.patchValue(this.todo);
    }
  }

  changeTodo() {
    this.sendForm.emit(this.newTodo.value);
  }
}

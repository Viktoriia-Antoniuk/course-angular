import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  message = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.dataService.addNewTodo(todo).subscribe((res) => {
      console.log(res);
      this.message = 'Task is added!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getAllTodo().subscribe((res) => {
      this.todos = res;
      console.log(res);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../post.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getAllTodos().subscribe((res) => {
      console.log(res);
      this.todos = res;
    });
  }

}

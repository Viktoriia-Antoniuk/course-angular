import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks = [{
    name: 'Task 1',
    isDone: true
  },
  {
    name: 'Task 2',
    isDone: false
  },
  {
    name: 'Task 3',
    isDone: true
  },
  {
    name: 'Task 4',
    isDone: true
  },
  {
    name: 'Task 5',
    isDone: false
  }];
}

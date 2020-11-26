import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task [] = [{
    id: 1,
    name: 'Task 1',
    status: true
  }, {
    id: 2,
    name: 'Task 2',
    status: false
  }, {
    id: 3,
    name: 'Task 3',
    status: true
  }, {
    id: 4,
    name: 'Task 4',
    status: true
  }, {
    id: 5,
    name: 'Task 5',
    status: false
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

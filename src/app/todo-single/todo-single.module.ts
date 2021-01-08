import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [TodoSingleComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TodoSingleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoEditRoutingModule } from './todo-edit-routing.module';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoFormModule } from '../shared/todo-form/todo-form.module';


@NgModule({
  declarations: [TodoEditComponent],
  imports: [
    CommonModule,
    TodoEditRoutingModule,
    TodoFormModule
  ]
})
export class TodoEditModule { }

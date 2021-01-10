import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DialogDelete, TodoItemComponent } from './todo-item/todo-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [TodoListComponent, TodoItemComponent, DialogDelete],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class TodoListModule { }

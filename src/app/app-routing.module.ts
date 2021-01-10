import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: 'todos', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
}, {
    path: 'todos/add', loadChildren: () => import('./todo-add/todo-add.module').then(m => m.TodoAddModule)
}, {
    path: 'todos/edit/:id', loadChildren: () => import('./todo-edit/todo-edit.module').then(m => m.TodoEditModule)
}, {
    path: 'todos/:id', loadChildren: () => import('./todo-single/todo-single.module').then(m => m.TodoSingleModule)
}, {
    path: '', redirectTo: 'todos', pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

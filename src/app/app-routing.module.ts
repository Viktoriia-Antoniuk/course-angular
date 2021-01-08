import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: 'todo', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
}, {
    path: 'todo/:id', loadChildren: () => import('./todo-single/todo-single.module').then(m => m.TodoSingleModule)
}, {
    path: '', redirectTo: 'todo', pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

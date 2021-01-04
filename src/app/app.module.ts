import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { TodosComponent } from './todos/todos.component';
import { TodosSingleComponent } from './todos-single/todos-single.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
}, {
  path: 'about', component: AboutComponent
}, {
  path: 'contact', component: ContactComponent
}, {
  path: 'blog', component: BlogComponent
}, {
  path: 'blog/:id', component: BlogSingleComponent
}, {
  path: 'todos', component: TodosComponent
}, {
  path: 'todos/:id', component: TodosSingleComponent
}, {
  path: '', redirectTo: 'home', pathMatch: 'full'
}, {
  path: '**', component: NotFoundComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogSingleComponent,
    TodosComponent,
    TodosSingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

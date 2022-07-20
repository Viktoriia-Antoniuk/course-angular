import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MethodComponent } from './method/method.component';

const routes: Routes = [{
  path: 'home', component: HomeComponent
}, {
  path: 'add', component: MethodComponent
}, {
  path: 'identification', component: ListComponent
}, {
  path: '', redirectTo: 'home', pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MethodComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

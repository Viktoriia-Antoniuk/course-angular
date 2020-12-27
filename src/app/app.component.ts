import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formType: string = 'registration';
  
  changeForm(type: string) {
    this.formType = type;
  }
}

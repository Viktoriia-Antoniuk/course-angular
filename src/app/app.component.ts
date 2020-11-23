import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Vika';

  number = 10;

  arrNumber = [10, 40, 49];

  products = [{
    name: 'Product 1',
    price: 20,
    isStock: true
  },
  {
    name: 'Product 2',
    price: 10,
    isStock: false
  }];

  isOpenMenu = false;

  openDropdown() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}

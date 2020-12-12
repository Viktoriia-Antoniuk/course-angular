import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sortType: string = 'desc';
  products: Product [] = [{
    id: 1,
    name: 'Product 1',
    price: 100
  }, {
    id: 2,
    name: 'Product 2',
    price: 50
  }, {
    id: 3,
    name: 'Product 3',
    price: 50
  }];
  sortProd() {
    this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
  }
}

import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sortType: string = 'desc';
  name = '';
  total: number | undefined = 200;
  
  productForm: Product = {
    name: '',
    price: ''
  }
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
  addProd() {
    this.products.push(this.productForm);
    this.products[this.products.length - 1].id = this.products.length;
    console.log(this.products);
    this.calcTotal();
    this.productForm = {
      name: '',
      price: ''
    }
  }
  calcTotal() {
    let tempTotal = 0;
    this.products.forEach(item => {
      tempTotal += +item.price;
    });
    this.total = tempTotal;
  }
  delete(i) {
    this.products.splice(i, 1);
    this.calcTotal();
  }
}

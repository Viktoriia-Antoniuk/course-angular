import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  view = 'grid';

  newProduct: Product;

  productsCart: Product[] = [];
  products: Product[] = [{
    name: 'Product title 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: 34
  }, {
    name: 'Product title 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: 21
  }];
  // tslint:disable-next-line: typedef
  changeView(view: string) {
    this.view = view;
  }
  // tslint:disable-next-line: typedef
  pushToCartComponent(product: Product) {
    product = Object.assign({}, product);
    this.newProduct = product;
    this.productsCart.push(product);
  }
}

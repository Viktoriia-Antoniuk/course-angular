import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view: string = 'grid';
  products: Product[] = [{
    name: 'Product title 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: 34
  }, {
    name: 'Product title 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi possimus fugit laudantium cupiditate quidem aut nisi et, obcaecati, iste quis ducimus ad minus laborum optio? Aperiam nobis voluptatum totam.',
    price: 21
  }];
  changeView(view: string) {
    this.view = view;
  }
}

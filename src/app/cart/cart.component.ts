import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() listCart;

  productsCart = [];
  total;
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  ngOnChanges() {
    if(this.listCart) {
      this.productsCart.push(this.listCart);
      this.total = this.calcTotal();
    }
  }
  // ngDoCheck() {
  //   if(this.listCart) {
  //     this.productsCart.push(this.listCart);
  //     this.total = this.calcTotal();
  //   }
  // }

  // tslint:disable-next-line: typedef
  deleteProductCart(id) {
    this.productsCart.splice(id, 1);
    this.total = this.calcTotal();
  }

  // tslint:disable-next-line: typedef
  calcTotal() {
    let total = 0;
    for(let product of this.productsCart) {
      total += product.price;
    }
    return total;
  }

}

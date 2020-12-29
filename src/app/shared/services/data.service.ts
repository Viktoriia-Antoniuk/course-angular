import { Injectable } from '@angular/core';
import { CartProduct, Category, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[] = [{
    name: 'Product 1',
    category: Category.laptop,
    price: 30,
    description: 'text'
  }, {
    name: 'Product 2',
    category: Category.phone,
    price: 130,
    description: 'text'
  }, {
    name: 'Product 3',
    category: Category.tv,
    price: 130,
    description: 'text'
  }];

  cart: CartProduct[] = [];

  constructor() {
    if (localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }
   }

  getProduct() {
    return this.products;
  }

  addCart(product: Product){
    console.log(product);
    const isCartProduct = this.cart.findIndex((item) => item.name === product.name);
    if (isCartProduct !== -1){
      this.cart[isCartProduct].quantity += 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1
      });
    }
    this.updateCartToStorage();
  }

  getCart() {
    return this.cart;
  }

  deleteProductByIndex(i: number) {
    this.cart.splice(i, 1);
    this.updateCartToStorage();
  }

  deleteCart() {
    this.cart.length = 0;
    this.updateCartToStorage();
  }

  updateCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

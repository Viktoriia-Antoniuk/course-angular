import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../shared/models/product.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  readonly Category = Category;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    console.log(this.dataService.products);
    this.products = this.dataService.getProduct();
  }
  addCart(product: Product){
    this.dataService.addCart(product);
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductCategory } from '../product-category.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product("Book", "Bestseller of this summers", 20, ProductCategory.equivalents, true),
      new Product("Apple", "Green but sweet", 1, ProductCategory.ingredients, true),
    ];
  }

}

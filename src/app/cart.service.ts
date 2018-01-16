import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class CartService {
  products: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

}

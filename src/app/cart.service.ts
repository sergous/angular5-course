import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class CartService {
  products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product) {
    this.products.push(product);
    product.isAvailible = false;
    console.log('Added to Cart');
    return product;
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.name !== product.name);
    product.isAvailible = true;
    console.log('Removed from Cart');
    return product;
  }

  getProducts() {
    return this.products;
  }

  get isEmpty() {
    return this.products.length === 0;
  }

}

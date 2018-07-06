import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCategory } from '../constants/product-category.enum';
import { products } from '../mocks';

@Injectable()
export class ProductsService {
  products = <Product[]>products;
  constructor() {}

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProduct(id: number | string): Promise<Product> {
    return this.getProducts()
      .then(products => products.find((p: Product) => p.id === +id))
      .catch(err => Promise.reject('Error in getProduct'));
  }

  async addProduct(product: Product): Promise<void> {
    this.products.push(product);
  }

  async updateProduct(product: Product): Promise<void> {
    const idx = this.products.findIndex(p => p.id === product.id);
    if (idx > -1) {
      this.products.splice(idx, 1, product);
    }
  }
}

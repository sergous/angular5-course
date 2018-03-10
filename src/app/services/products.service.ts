import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCategory } from '../constants/product-category.enum';

@Injectable()
export class ProductsService {

  constructor() { }

  async getProducts() {
    return Promise.resolve([
      new Product("Book", "Bestseller of this summers", 20, ProductCategory.equivalents, true),
      new Product("Apple", "Green but sweet", 1, ProductCategory.ingredients, true),
    ]);
  }
}

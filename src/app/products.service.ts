import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductCategory } from './product-category.enum';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      new Product("Book", "Bestseller of this summers", 20, ProductCategory.equivalents, true),
      new Product("Apple", "Green but sweet", 1, ProductCategory.ingredients, true),
    ];
  }
}

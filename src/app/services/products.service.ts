import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCategory } from '../constants/product-category.enum';
import { products } from '../mocks';

@Injectable()
export class ProductsService {
  constructor() {}

  async getProducts() {
    return <Product[]>products;
  }
}

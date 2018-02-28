import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { PRODUCTS_URL } from '../constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductsService {

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get(PRODUCTS_URL);
  }
}

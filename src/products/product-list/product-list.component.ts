import { Component, OnInit } from '@angular/core';
import { Product } from '../../app/models/product.model';
import { ProductCategory } from '../../app/constants/product-category.enum';
import { ProductsService, AuthService } from '../../app/services';

import { ProductListComponent, ProductFormComponent } from '.';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(
    public productsService: ProductsService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}

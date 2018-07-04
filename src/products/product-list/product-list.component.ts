import { Component, OnInit } from '@angular/core';
import { Product } from '../../app/models/product.model';
import { ProductCategory } from '../../app/constants/product-category.enum';
import { ProductsService } from '../../app/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Promise<Product[]>;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}

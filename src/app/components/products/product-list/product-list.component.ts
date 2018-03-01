import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductCategory } from '../../../constants/product-category.enum';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  nameQuery: string = '';
  selectedType: string;
  typeProp: any[] = ['itemType'];
  nameProp: any[] = ['menuItem'];

  constructor(
    public productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe((products: Product[]) => 
        this.products = products);
  }

}

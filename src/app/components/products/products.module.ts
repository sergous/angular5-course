import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollectionPipesModule } from 'ng-pipes';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    CollectionPipesModule,
  ],
  declarations: [
    ProductListComponent,
    ProductItemComponent,
  ],
  providers: [ProductsService, CartService],
  exports: [
    ProductListComponent,
    ProductItemComponent,
  ],
})
export class ProductsModule { }

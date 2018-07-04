import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService, CartService } from '../app/services';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [ProductListComponent, ProductItemComponent],
  providers: [ProductsService, CartService],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductsModule {}

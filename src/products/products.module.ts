import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ProductListComponent,
  ProductItemComponent,
  ProductFormComponent,
} from '.';
import { ProductsService, CartService } from '../app/services';
import { EnumToArrayPipe } from '../app/pipes';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductFormComponent,
    EnumToArrayPipe,
  ],
  providers: [ProductsService, CartService],
  exports: [
    ProductListComponent,
    ProductItemComponent,
    ProductFormComponent,
    EnumToArrayPipe,
  ],
})
export class ProductsModule {}

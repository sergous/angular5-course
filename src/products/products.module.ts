import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductItemComponent } from '.';
import { ProductsService, CartService } from '../app/services';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [ProductListComponent, ProductItemComponent],
  providers: [ProductsService, CartService],
  exports: [ProductListComponent, ProductItemComponent],
})
export class ProductsModule {}

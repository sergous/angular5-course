import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService, CartService } from '../app/services';
import { EnumToArrayPipe } from '../app/pipes';
import {
  productsRoutingModules,
  ProductsRoutingModule,
} from './products-routing.module';

@NgModule({
  imports: [FormsModule, CommonModule, ProductsRoutingModule],
  declarations: [...productsRoutingModules, EnumToArrayPipe],
  providers: [ProductsService, CartService],
  exports: [...productsRoutingModules, EnumToArrayPipe],
})
export class ProductsModule {}

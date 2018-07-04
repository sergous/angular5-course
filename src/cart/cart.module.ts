import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartService } from '../app/services';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [CartListComponent, CartItemComponent],
  providers: [CartService],
  exports: [CartListComponent, CartItemComponent],
})
export class CartModule {}

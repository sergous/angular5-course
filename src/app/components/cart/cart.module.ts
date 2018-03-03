import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartService } from '../../services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
  ],
  providers: [CartService],
  exports: [
    CartListComponent,
    CartItemComponent
  ],
})
export class CartModule { }

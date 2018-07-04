import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartListComponent } from '.';
import { CartService } from '../app/services';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [CartListComponent, CartItemComponent],
  providers: [CartService],
  exports: [CartListComponent, CartItemComponent],
})
export class CartModule {}

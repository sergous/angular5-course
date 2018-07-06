import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartListComponent, CartNumberComponent } from '.';
import { CartService } from '../app/services';
import { AppRoutingModule } from '../app/app-routing.module';
@NgModule({
  imports: [FormsModule, CommonModule, AppRoutingModule],
  declarations: [CartListComponent, CartItemComponent, CartNumberComponent],
  providers: [CartService],
  exports: [CartListComponent, CartItemComponent, CartNumberComponent],
})
export class CartModule {}

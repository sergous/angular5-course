import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartListComponent } from '.';
import { CartService } from '../app/services';
import { AppRoutingModule } from '../app/app-routing.module';
@NgModule({
  imports: [FormsModule, CommonModule, AppRoutingModule],
  declarations: [CartListComponent, CartItemComponent],
  providers: [CartService],
  exports: [CartListComponent, CartItemComponent],
})
export class CartModule {}

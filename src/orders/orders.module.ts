import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent, OrderItemComponent } from '.';
import { OrderService } from '../app/services';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderListComponent, OrderItemComponent],
  providers: [OrderService],
  exports: [OrderListComponent],
})
export class OrdersModule {}

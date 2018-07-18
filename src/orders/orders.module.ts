import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../app/services';
import {
  OrdersRoutingModule,
  ordersRoutingComponents,
} from './orders-routing.module';

@NgModule({
  imports: [CommonModule, OrdersRoutingModule],
  declarations: [...ordersRoutingComponents],
  providers: [OrderService],
  exports: [...ordersRoutingComponents],
})
export class OrdersModule {}

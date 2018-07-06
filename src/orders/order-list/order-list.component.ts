import { Component } from '@angular/core';
import { OrderService } from '../../app/services';
import { Order } from '../../app/models';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  orders: Promise<Order[]>;
  constructor(public orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }
}

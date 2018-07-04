import { Component } from '@angular/core';
import { OrderService } from '../../app/services';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  constructor(public orderService: OrderService) {}
}

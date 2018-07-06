import { Component, Input } from '@angular/core';
import { Order } from '../../app/models';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
})
export class OrderItemComponent {
  @Input() order: Order;
}

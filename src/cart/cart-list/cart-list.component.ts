import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../app/services';
import { CartField, CART_FIELD, Order } from '../../app/models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Output() submitOrder: EventEmitter<Order> = new EventEmitter();

  sortFields: CartField[];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.sortFields = Object.keys(CART_FIELD).map(key => CART_FIELD[key]);
  }

  handleEmptyCart() {
    this.cartService.emptyCart();
  }

  handleSubmit() {
    const items = this.cartService.getItems();
    const totalNumber = this.cartService.totalNumber;
    const totalPrice = this.cartService.totalPrice;
    const order = new Order(items, totalNumber, totalPrice);
    this.submitOrder.emit(order);
    this.handleEmptyCart();
  }
}

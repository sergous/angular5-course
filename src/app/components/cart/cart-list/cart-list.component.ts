import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartField, CART_FIELD } from '../../../models/cart-item.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  sortFields: CartField[];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.sortFields = Object.keys(CART_FIELD).map(key => CART_FIELD[key]);
  }

  handleEmptyCart() {
    this.cartService.emptyCart();
  }
}

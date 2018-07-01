import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cart-item.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  product: Product;
  quantity: number;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.product = this.item.product;
    this.quantity = this.item.quantity;
  }

  handleRemove(event: any) {
    this.cartService.removeItem(this.item);
  }

  handleChangeQuantity() {
    this.cartService.setProductQuantity(this.product, this.quantity);
  }

}

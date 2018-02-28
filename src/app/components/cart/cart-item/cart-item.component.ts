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
  @Output() remove: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  product: Product;

  constructor() { }

  ngOnInit() {
    this.product = this.item.product;
  }

  handleRemove(event: any) {
    this.remove.emit(this.item);
  }

}

import { Component } from '@angular/core';
import { CartService } from '../../app/services';

@Component({
  selector: 'app-cart-number',
  template: `<span>{{cartService.totalNumber}}</span>`,
})
export class CartNumberComponent {
  constructor(public cartService: CartService) {}
}

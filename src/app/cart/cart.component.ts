import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: Product[];

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

}

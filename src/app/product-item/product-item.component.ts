import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(public cartService: CartService) { }

  ngOnInit() {

  }

  handleAdd(product) {
    this.product = this.cartService.addProduct(product);
  }

  handleRemove(product) {
    this.product = this.cartService.removeProduct(product);
  }

}

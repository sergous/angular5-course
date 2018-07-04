import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../app/models';
import { CartService } from '../../app/services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity = 1;

  constructor(public cartService: CartService) {}

  ngOnInit() {}

  handleAdd(product) {
    this.cartService.addProduct(product, this.quantity);
  }
}

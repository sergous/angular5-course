import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../app/models';
import { CartService, AuthService } from '../../app/services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity = 1;

  constructor(
    public cartService: CartService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}

  handleAdd(product) {
    this.cartService.addProduct(product, this.quantity);
  }

  handleEdit(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}

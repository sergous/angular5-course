import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../app/constants';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../app/models';
import { ProductsService } from '../../app/services';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent implements OnInit {
  product: Product;
  categories = ProductCategory;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public productsService: ProductsService
  ) {}

  ngOnInit() {
    this.product = new Product(null, '', 0, null, false);

    this.route.paramMap
      .pipe(
        switchMap((params: Params) =>
          this.productsService.getProduct(params.get('productID'))
        )
      )
      .subscribe(
        (product: Product) => (this.product = { ...product }),
        err => console.log(err)
      );
  }

  handleBack() {
    this.router.navigate(['/shop']);
  }

  handleSubmit() {
    const product = { ...this.product };
    if (product.id) {
      this.productsService.updateProduct(product).then(() => this.handleBack());
    } else {
      this.productsService.addProduct(product).then(() => this.handleBack());
    }
  }
}

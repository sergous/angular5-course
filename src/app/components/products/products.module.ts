import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatIconModule, MatListModule } from '@angular/material';
import { CollectionPipesModule } from 'ng-pipes';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { UniquePipe } from '../../pipes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    CollectionPipesModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    UniquePipe,
  ],
  providers: [ProductsService, CartService],
  exports: [
    ProductListComponent,
    ProductItemComponent,
  ],
})
export class ProductsModule { }

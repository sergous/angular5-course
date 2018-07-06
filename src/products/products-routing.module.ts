import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  ProductListComponent,
  ProductItemComponent,
  ProductFormComponent,
} from '.';

const routes: Routes = [
  {
    path: 'shop',
    component: ProductListComponent,
  },
  {
    path: 'products/add',
    component: ProductFormComponent,
  },
  {
    path: 'products/:productID',
    component: ProductFormComponent,
  },
];

export const productsRoutingModules = [
  ProductListComponent,
  ProductItemComponent,
  ProductFormComponent,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

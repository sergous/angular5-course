import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  ProductListComponent,
  ProductItemComponent,
  ProductFormComponent,
} from '.';
import { AuthGuard } from '../app/guards';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/add',
    canActivate: [AuthGuard],
    component: ProductFormComponent,
  },
  {
    path: 'products/:productID',
    canActivate: [AuthGuard],
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

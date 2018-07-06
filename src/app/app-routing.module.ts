import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent, ProductFormComponent } from '../products';
import { CartListComponent } from '../cart';
import { OrderListComponent } from '../orders';

export const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
  },
  {
    path: 'shop',
    component: ProductListComponent,
  },
  {
    path: 'products/:productID',
    component: ProductFormComponent,
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
  {
    path: 'orders',
    component: OrderListComponent,
  },
  // {
  //   path: '*',
  //   component: PathNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

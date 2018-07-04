import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products';
import { CartListComponent } from '../cart';

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
    path: 'cart',
    component: CartListComponent,
  },
  // {
  //   path: 'orders',
  //   component: OrdersModule,
  // },
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

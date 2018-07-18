import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartListComponent } from '../cart';
import { LoginComponent } from './components';
import { AuthGuard } from './guards';
import { OrderListComponent } from '../orders';

const extraOptions: ExtraOptions = {
  enableTracing: true,
};

export const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent,
  },
  // TODO: lazy load - add orders route:
  // {
  //   path: 'orders',
  //   canActivate: [AuthGuard],
  //   loadChildren: 'orders/orders.module#OrdersModule',
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: '*',
  //   component: PathNotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

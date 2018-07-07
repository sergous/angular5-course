import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartListComponent } from '../cart';
import { OrderListComponent } from '../orders';
import { LoginComponent } from './components';
import { AuthGuard } from './guards';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: 'shop',
  },
  {
    path: 'cart',
    component: CartListComponent,
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    component: OrderListComponent,
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent, LoginComponent } from './components';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {
  ProductsService,
  CartService,
  ConfigOptionsService,
  LocalStorageService,
  OrderService,
  AuthService,
} from './services';
import { AuthGuard } from './guards';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';
import { GeneratorFactory, BUILD_ID } from './factories';
import { AppConfigProvider } from './app.config';
import { APP_NAME, APP_VERSION } from './constants';
import { ZoomDirective } from './directives/zoom.directive';
import { OrderByPipe } from './pipes';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from '../orders';

@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    OrderByPipe,
    NavComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CartModule,
    ProductsModule,
    AppRoutingModule,
    OrdersModule,
  ],
  providers: [
    ProductsService,
    CartService,
    OrderService,
    LocalStorageService,
    ConfigOptionsService,
    OrderByPipe,
    AuthService,
    AuthGuard,
    AppConfigProvider,
    { provide: BUILD_ID, useFactory: GeneratorFactory(14) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

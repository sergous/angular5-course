import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavComponent } from './components';
import { AppComponent } from './app.component';
import {
  ProductsService,
  CartService,
  ConfigOptionsService,
  LocalStorageService,
  OrderService,
} from './services';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';
import { GeneratorFactory, BUILD_ID } from './factories';
import { AppConfigProvider } from './app.config';
import { APP_NAME, APP_VERSION } from './constants';
import { ZoomDirective } from './directives/zoom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ZoomDirective, OrderByPipe, NavComponent],
  imports: [BrowserModule, CartModule, ProductsModule, AppRoutingModule],
  providers: [
    ProductsService,
    CartService,
    OrderService,
    LocalStorageService,
    ConfigOptionsService,
    OrderByPipe,
    AppConfigProvider,
    { provide: BUILD_ID, useFactory: GeneratorFactory(14) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

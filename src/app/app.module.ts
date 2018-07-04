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
import { CartModule } from './components/cart/cart.module';
import { ProductsModule } from './components/products/products.module';
import { GeneratorFactory, BUILD_ID } from './factories';
import { AppConfigProvider } from './app.config';
import { APP_NAME, APP_VERSION } from './constants';
import { ZoomDirective } from './directives/zoom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [AppComponent, ZoomDirective, OrderByPipe, NavComponent],
  imports: [BrowserModule, CartModule, ProductsModule],
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

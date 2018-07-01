import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { CartModule } from './components/cart/cart.module';
import { ProductsModule } from './components/products/products.module';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { GeneratorFactory, BUILD_ID } from './factories';
import { AppConfigProvider } from './app.config';
import { APP_NAME, APP_VERSION } from './constants';
import { ZoomDirective } from './directives/zoom.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [AppComponent, ZoomDirective, OrderByPipe],
  imports: [BrowserModule, CartModule, ProductsModule],
  providers: [
    ProductsService,
    CartService,
    LocalStorageService,
    ConfigOptionsService,
    OrderByPipe,
    AppConfigProvider,
    { provide: BUILD_ID, useFactory: GeneratorFactory(14) },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

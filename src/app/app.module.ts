import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { CartModule } from './components/cart/cart.module';
import { ProductsModule } from './components/products/products.module';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule
  ],
  providers: [ProductsService, CartService, LocalStorageService, ConfigOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { CartModule } from './components/cart/cart.module';
import { ProductsModule } from './components/products/products.module';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { GeneratorFactory, BUILD_ID } from './generator.factory';
import { ConstantsService } from './services/constants.service';
import { APP_NAME, APP_VERSION } from './constants';

export const constantsService = new ConstantsService(APP_NAME, APP_VERSION);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule
  ],
  providers: [
    ProductsService,
    CartService,
    LocalStorageService,
    ConfigOptionsService,
    {provide: BUILD_ID, useFactory: GeneratorFactory(14)},
    { provide: ConstantsService, useValue: constantsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

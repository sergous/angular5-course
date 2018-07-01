import { Component, Inject, Optional, SkipSelf } from '@angular/core';
import { APP_NAME, APP_VERSION } from './constants';
import { BUILD_ID } from './factories';
import { AppConfig, IAppConfig } from './app.config';
import { OrderService } from './services';
import { Order } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  message: string;

  constructor(
    @Inject(AppConfig) public config: IAppConfig,
    @Inject(BUILD_ID) public buildId: string,
    private orderService: OrderService
  ) {}

  onSubmitOrder(order: Order) {
    try {
      this.orderService.addOrder(order);
      this.message = 'Order added';
    } catch (reason) {
      this.message = reason;
    }
  }
}

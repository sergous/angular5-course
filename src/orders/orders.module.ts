import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '.';
import { OrderService } from '../app/services';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderListComponent],
  providers: [OrderService],
  exports: [OrderListComponent],
})
export class OrdersModule {}

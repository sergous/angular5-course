import { Injectable } from '@angular/core';
import { LocalStorageService } from '.';
import { Order } from '../models';

const ordersKey = 'orders';

@Injectable()
export class OrderService {
  constructor(public localStorageService: LocalStorageService) {}

  async addOrder(order: Order): Promise<void> {
    const orders = await this.getOrders();
    orders.push(order);
    return this.localStorageService.setItem(ordersKey, orders);
  }

  async getOrders(): Promise<Order[]> {
    const ordersJSON = <Order[]>this.localStorageService.getItem(ordersKey);
    return ordersJSON ? ordersJSON : [];
  }
}

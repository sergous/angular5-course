import { CartItem } from './cart-item.model';

export class Order {
  constructor(
    items: CartItem[],
    totalNumber: number,
    totalPrice: number,
    public createdAt: number = Date.now(),
    public updatedAt: number = Date.now()
  ) {}
}

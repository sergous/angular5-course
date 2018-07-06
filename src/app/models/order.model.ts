import { CartItem } from './cart-item.model';

export class Order {
  constructor(
    public items: CartItem[],
    public totalNumber: number,
    public totalPrice: number,
    public createdAt: number = Date.now(),
    public updatedAt: number = Date.now()
  ) {}
}

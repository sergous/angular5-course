import { Product } from "./product.model";

export type CartField = 'price' | 'quantity' | 'name';
export const CART_FIELD = {
  PRICE: <CartField>'price',
  QUANTITY: <CartField>'quantity',
  NAME: <CartField>'name',
}

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number,
        public createdAt: number = Date.now(),
        public updatedAt: number = Date.now(),
    ) {}
}

import { Product } from "./product.model";

export type CartField = 'price' | 'quantity' | 'name';

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number,
        public createdAt: number = Date.now(),
        public updatedAt: number = Date.now(),
    ) {}
}

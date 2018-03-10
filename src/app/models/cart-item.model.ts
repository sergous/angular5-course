import { Product } from "./product.model";

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number,
        public createdAt: number = Date.now(),
        public updatedAt: number = Date.now(),
    ) {}
}

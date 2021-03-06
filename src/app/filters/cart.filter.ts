import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";

export const CART_FILTER = {
  PRODUCT_NAME_EQ: (product: Product) => (item: CartItem) => item.product.name === product.name,
  PRODUCT_NAME_NOT_EQ: (product: Product) => (item: CartItem) => item.product.name !== product.name
};

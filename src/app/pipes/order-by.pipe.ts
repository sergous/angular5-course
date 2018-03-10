import { Pipe, PipeTransform } from '@angular/core';
import { CartItem, CartField } from '../models/cart-item.model';

const CART_FIELD = {
  PRICE: 'price',
  QUANTITY: 'quantity',
  NAME: 'name',
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: CartItem[], field: CartField, isAsc = true): CartItem[] {
    const compare = (a, b) => {
      const res = a > b;
      return isAsc
        ? res ? -1 : 1
        : res ? 1 : -1
    }

    const cartSort = (a: CartItem, b: CartItem): number => {
      switch(field) {
        case CART_FIELD.NAME:
          return compare(a.product[CART_FIELD.NAME], b.product[CART_FIELD.NAME])
        case CART_FIELD.PRICE:
          return compare(a.product[CART_FIELD.PRICE], b.product[CART_FIELD.PRICE])
        case CART_FIELD.QUANTITY:
          return compare(a[CART_FIELD.QUANTITY], b[CART_FIELD.QUANTITY])
      }
    }

    return items.sort(cartSort);
  }

}

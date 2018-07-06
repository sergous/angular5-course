import { ProductCategory } from '../constants/product-category.enum';

export class Product {
  lastId: number = 0;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory | string,
    public isAvailible: boolean
  ) {
    this.id = ++this.lastId;
  }
}

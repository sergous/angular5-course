import { ProductCategory } from '../constants/product-category.enum';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory | string,
    public isAvailible: boolean
  ) {}
}

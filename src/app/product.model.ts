import { ProductCategory } from "./product-category.enum";

export class Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailible: boolean,
  ) {
  }
}

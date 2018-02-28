import { ProductCategory } from "../constants/product-category.enum";

export class Product {
  constructor(
    public menuItem: string,
    public price: number,
    public itemType: ProductCategory,
  ) {
  }
}

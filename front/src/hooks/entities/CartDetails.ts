import Product from "./Product";

export default class CartDetails {
  product: Product;
  quantity: number;

  constructor(product?: Product, quantity?: number) {
    this.product = product || new Product();
    this.quantity = quantity || 0;
  }
}
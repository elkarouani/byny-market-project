export default class Product {
  slug: string;
  label: string;
  illustration: string;
  description: string;
  price: number;

  constructor() {
    this.slug = "";
    this.label = "";
    this.illustration = "";
    this.description = "";
    this.price = 0;
  }
}

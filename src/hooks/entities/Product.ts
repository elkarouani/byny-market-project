export default class Product {
  slug: string;
  label: string;
  illustration: string;
  description: string;
  price: number;

  constructor(
    slug?: string,
    label?: string,
    illustration?: string,
    description?: string,
    price?: number
  ) {
    this.slug = slug || "";
    this.label = label || "";
    this.illustration = illustration || "";
    this.description = description || "";
    this.price = price || 0;
  }
}

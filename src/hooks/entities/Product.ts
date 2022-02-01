export default class Product {
  slug: string;
  label: string;
  illustration: string;
  description: string;
  price: number;
  unit: {
    label: string;
    value: number;
  }

  constructor(
    slug?: string,
    label?: string,
    illustration?: string,
    description?: string,
    price?: number,
    unit?: {
      label: string;
      value: number;
    }
  ) {
    this.slug = slug || "";
    this.label = label || "";
    this.illustration = illustration || "";
    this.description = description || "";
    this.price = price || 0;
    this.unit = unit || {
      label: "",
      value: 0
    };
  }
}

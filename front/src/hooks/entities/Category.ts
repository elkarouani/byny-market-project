export default class Category {
  id: number;
  slug: string;
  name: string;
  illustration: string;
  description: string;

  constructor(
    id?: number,
    slug?: string,
    name?: string,
    illustration?: string,
    description?: string,
  ) {
    this.id = id || 0;
    this.slug = slug || "";
    this.name = name || "";
    this.illustration = illustration || "";
    this.description = description || "";
  }
}

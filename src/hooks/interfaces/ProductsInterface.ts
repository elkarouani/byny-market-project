import Product from "../entities/Product";

export default interface ProductsInterface {
  allProducts: Product[];
  newProducts: Product[];
  mostPurchasedProducts: Product[];
  allCategories: string[];
  loadNewProducts: () => void;
}

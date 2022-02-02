import Category from "../entities/Category";
import Product from "../entities/Product";

export default interface ProductsInterface {
  allProducts: Product[];
  newProducts: Product[];
  mostPurchasedProducts: Product[];
  allCategories: Category[];
  loadNewProducts: () => void;
  loadAllCategories: () => void;
  addProductToCart: (product: Product) => void;
}

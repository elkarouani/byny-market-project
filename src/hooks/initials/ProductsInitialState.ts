import Category from "../entities/Category";
import Product from "../entities/Product";
import ProductsInterface from "../interfaces/ProductsInterface";

const productsInitialState: ProductsInterface = {
  allProducts: [new Product()],
  newProducts: [new Product()],
  mostPurchasedProducts: [new Product()],
  allCategories: [new Category()],
  loadNewProducts: () => {},
  loadAllProducts: () => {},
  loadAllCategories: () => {},
  addProductToCart: (product: Product) => {},
};

export default productsInitialState;
import Product from "../entities/Product";
import ProductsInterface from "../interfaces/ProductsInterface";

const productsInitialState: ProductsInterface = {
  allProducts: [new Product()],
  newProducts: [new Product()],
  mostPurchasedProducts: [new Product()],
  allCategories: [""],
  loadNewProducts: () => {},
};

export default productsInitialState;
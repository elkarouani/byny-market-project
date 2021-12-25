import Product from "../entities/Product";
import ProductsInterface from "../interfaces/ProductsInterface";

const productsInitialState: ProductsInterface = {
  allProducts: [new Product()],
  newProducts: [new Product()],
  allCategories: [""],
};

export default productsInitialState;
import Product from "../entities/Product";

export default interface ProductsInterface {
    allProducts: Product[];
    newProducts: Product[];
    allCategories: string[];
}
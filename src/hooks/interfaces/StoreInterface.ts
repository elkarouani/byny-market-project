import ProductsInterface from "./ProductsInterface";
import ServicesInterface from "./SevicesInterface";

export default interface StoreInterface {
    products: ProductsInterface;
    services: ServicesInterface;
}
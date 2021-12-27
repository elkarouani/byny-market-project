import ProductsInterface from "./ProductsInterface";
import ServicesInterface from "./SevicesInterface";

export default interface StoreInterface {
    products: ProductsInterface;
    services: ServicesInterface;
    productsContextActions: {
        loadAllProducts: () => void;
        loadAllCategories: () => void;
        loadNewProducts: () => void;
        loadMostPurchasedProducts: () => void;
    };
    servicesContextActions: {
        loadAllServices: () => void;
    };
}
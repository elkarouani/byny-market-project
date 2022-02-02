import Product from "../entities/Product";
import CartInterface from "./CartInterface";
import ProductsInterface from "./ProductsInterface";
import ServicesInterface from "./SevicesInterface";

export default interface StoreInterface {
    products: ProductsInterface;
    services: ServicesInterface;
    cart: CartInterface;
    productsContextActions: {
        loadAllProducts: () => void;
        loadAllCategories: () => void;
        loadNewProducts: () => void;
        loadMostPurchasedProducts: () => void;
    };
    servicesContextActions: {
        loadAllServices: () => void;
    };
    cartContextActions: {
        addProductToCart: (product: Product) => void;
        isProductInCart: (productSlug: string) => boolean;
        increaseItemQuantity: (productSlug: string) => void;
        decreaseItemQuantity: (productSlug: string) => void;
        removeItemFromCart: (productSlug: string) => void;
    }
}
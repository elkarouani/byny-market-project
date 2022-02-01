import allCategories from "@/store/products/allCategories";
import allProductsData from "@/store/products/allProducts";
import mostPurchasedProductsData from "@/store/products/mostPurchasedProducts";
import newProductsData from "@/store/products/newProducts";
import allServicesData from "@/store/services/allServices";
import CartDetails from "../entities/CartDetails";
import Product from "../entities/Product";
import Service from "../entities/Service";
import StoreInterface from "../interfaces/StoreInterface";

type StoreActionType =
  | { type: "GET_ALL_PRODUCTS" }
  | { type: "GET_ALL_CATEGORIES" }
  | { type: "GET_NEW_PRODUCTS" }
  | { type: "GET_MOST_PURCHASED_PRODUCTS" }
  | { type: "GET_ALL_SERVICES" }
  | { type: "ADD_PRODUCT_TO_CART"; payload: Product }
  | { type: "INCREASE_ITEM_QUANTITY"; payload: string }
  | { type: "DECREASE_ITEM_QUANTITY"; payload: string }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: string };

export default function storeReducer(
  state: StoreInterface,
  action: StoreActionType
) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          allProducts: allProductsData.map((productData: Product) => {
            let product = new Product();
            product.slug = productData.slug;
            product.label = productData.label;
            product.description = productData.description;
            product.illustration = productData.illustration;
            product.price = productData.price;
            product.unit = productData.unit;
            return product;
          }),
        },
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        products: {
          ...state.products,
          allCategories: [...state.products.allCategories, ...allCategories],
        },
      };
    case "GET_NEW_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          newProducts: newProductsData.map((productData: Product) => {
            let product = new Product();
            product.slug = productData.slug;
            product.label = productData.label;
            product.description = productData.description;
            product.illustration = productData.illustration;
            product.price = productData.price;
            return product;
          }),
        },
      };
    case "GET_MOST_PURCHASED_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          mostPurchasedProducts: mostPurchasedProductsData.map(
            (productData: Product) => {
              let product = new Product();
              product.slug = productData.slug;
              product.label = productData.label;
              product.description = productData.description;
              product.illustration = productData.illustration;
              product.price = productData.price;
              return product;
            }
          ),
        },
      };
    case "GET_ALL_SERVICES":
      return {
        ...state,
        services: {
          ...state.services,
          allServices: allServicesData.map((serviceData: Service) => {
            let service = new Service();
            service.slug = serviceData.slug;
            service.label = serviceData.label;
            service.description = serviceData.description;
            service.illustration = serviceData.illustration;
            return service;
          }),
        },
      };
    case "ADD_PRODUCT_TO_CART":
      const isProductAlreadyInCart = state.cart.cartItems.find(
        (cartItem: CartDetails) => {
          return cartItem.product.slug === action.payload.slug;
        }
      );

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: isProductAlreadyInCart
            ? [...state.cart.cartItems]
            : [...state.cart.cartItems, new CartDetails(action.payload, 1)],
        },
      };
    case "INCREASE_ITEM_QUANTITY":
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: state.cart.cartItems.map((cartItem: CartDetails) => {
            if (cartItem.product.slug === action.payload) {
              cartItem.quantity++;
            }
            return cartItem;
          }),
        },
      };
    case "DECREASE_ITEM_QUANTITY":
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: state.cart.cartItems.map((cartItem: CartDetails) => {
            if (
              cartItem.product.slug === action.payload &&
              cartItem.quantity > 1
            ) {
              cartItem.quantity--;
            }
            return cartItem;
          }),
        },
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: state.cart.cartItems.filter(
            (cartItem: CartDetails) => cartItem.product.slug !== action.payload
          ),
        },
      };
    default:
      return state;
  }
}

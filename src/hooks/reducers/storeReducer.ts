import allProductsData from "@/store/products/allProducts";
import mostPurchasedProductsData from "@/store/products/mostPurchasedProducts";
import newProductsData from "@/store/products/newProducts";
import allServicesData from "@/store/services/allServices";
import Product from "../entities/Product";
import Service from "../entities/Service";
import StoreInterface from "../interfaces/StoreInterface";

type StoreActionType =
  | { type: "GET_ALL_PRODUCTS" }
  | { type: "GET_ALL_CATEGORIES" }
  | { type: "GET_NEW_PRODUCTS" }
  | { type: "GET_MOST_PURCHASED_PRODUCTS" }
  | { type: "GET_ALL_SERVICES" };

export default function storeReducer(state: StoreInterface, action: StoreActionType) {
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
            return product;
          }),
        },
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        products: {
          ...state.products,
          allCategories: [...state.products.allCategories, ""],
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
          mostPurchasedProducts: mostPurchasedProductsData.map((productData: Product) => {
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
    default:
      return state;
  }
}

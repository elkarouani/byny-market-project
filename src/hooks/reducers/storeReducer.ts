import mostPurchasedProducts from "@/store/products/mostPurchasedProducts";
import newProducts from "@/store/products/newProducts";
import allServices from "@/store/services/allServices";
import Product from "../entities/Product";
import Service from "../entities/Service";
import StoreInterface from "../interfaces/StoreInterface";

export default function storeReducer(state: StoreInterface, action: any) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: {
          ...state.products,
          allProducts: [...state.products.allProducts, new Product()],
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
      const newProductsList = newProducts.map((productData: Product) => {
        let product = new Product();
        product.slug = productData.slug;
        product.label = productData.label;
        product.description = productData.description;
        product.illustration = productData.illustration;
        product.price = productData.price;
        return product;
      });

      return {
        ...state,
        products: {
          ...state.products,
          newProducts: [...state.products.newProducts, ...newProductsList],
        },
      };
    case "GET_MOST_PURCHASED_PRODUCTS":
      const mostPurchasedProductsList = mostPurchasedProducts.map((productData: Product) => {
        let product = new Product();
        product.slug = productData.slug;
        product.label = productData.label;
        product.description = productData.description;
        product.illustration = productData.illustration;
        product.price = productData.price;
        return product;
      });

      return {
        ...state,
        products: {
          ...state.products,
          mostPurchasedProducts: [...state.products.mostPurchasedProducts, ...mostPurchasedProductsList],
        },
      };
    case "GET_ALL_SERVICES":
      const allServicesList = allServices.map((serviceData: Service) => {
        let service = new Service();
        service.slug = serviceData.slug;
        service.label = serviceData.label;
        service.description = serviceData.description;
        service.illustration = serviceData.illustration;
        return service;
      });

      return {
        ...state,
        services: {
          ...state.services,
          allServices: [...state.services.allServices, ...allServicesList],
        },
      };
    default:
      return state;
  }
}

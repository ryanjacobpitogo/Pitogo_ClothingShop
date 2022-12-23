import { Products } from "../../components/Products";
import { Product } from "../../models";


export type ShopState = {
    cart_products: Product[];
    wish_products: Product[];
    checkout_products: Product[];
    total: number;
    addToCart: any;
    removeFromCart: any;
    updateCartQty: any;
    addToWish: any;
    removeFromWish: any;
};

export const initShopState = {
    cart_products: [],
    wish_products: [],
    checkout_products: [],
    total: 0,
    addToCart: null,
    removeFromCart: null,
    updateCartQty: null,
    addToWish: null,
    removeFromWish: null,
};
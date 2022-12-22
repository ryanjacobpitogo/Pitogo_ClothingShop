import { Products } from "../../components/Products";
import { Product } from "../../models";


export type ShopState = {
    cart_products: Product[];
    wish_products: Product[];
    total: number;
    addToCart: any;
    removeFromCart: any;
    addToWish: any;
    removeFromWish: any;
};

export const initShopState = {
    cart_products: [],
    wish_products: [],
    total: 0,
    addToCart: null,
    removeFromCart: null,
    addToWish: null,
    removeFromWish: null,
};
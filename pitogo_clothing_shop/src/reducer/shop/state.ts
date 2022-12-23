import { Products } from "../../components/Products";
import { Product } from "../../models";


export type ShopState = {
    cart_products: Product[];
    wish_products: Product[];
    checkout_products: Product[];
    showCheckout: boolean;
    total: number;
    addToCart: any;
    removeFromCart: any;
    clearCart: any;
    updateCartQty: any;
    addToWish: any;
    removeFromWish: any;
    clearWish: any;
    addToCheckout: any;
    clearCheckout: any;
};

export const initShopState = {
    cart_products: [],
    wish_products: [],
    checkout_products: [],
    showCheckout: false,
    total: 0,
    addToCart: null,
    removeFromCart: null,
    clearCart: null,
    updateCartQty: null,
    addToWish: null,
    removeFromWish: null,
    clearWish: null,
    addToCheckout: null,
    clearCheckout: null,
};
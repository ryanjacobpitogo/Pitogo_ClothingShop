import { Products } from "../../components/Products";
import { Product } from "../../models";


export type CartState = {
    products: Product[];
    total: number;
    addToCart: any;
    removeFromCart: any;
};

export const initCartState = {
    products: [],
    total: 0,
    addToCart: null,
    removeFromCart: null
};
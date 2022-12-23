
import { Product } from "../../models";
import { ShopState } from "./state";

export enum ShopActionType {
    ADD_TO_CART = 'add_cart',
    REMOVE_FROM_CART = 'remove_cart',
    UPDATE_CART_QTY = 'update_cart_qty',
    UPDATE_TOTAL = 'update',
    ADD_TO_WISH = 'add_wish',
    REMOVE_FROM_WISH = 'remove_wish',
    ADD_TO_CHECKOUT = 'add_checkout',
    CLEAR_CHECKOUT = 'clear_checkout'
}
  
export type ShopAction = {
    type: ShopActionType;
    payload: any;
};
  
export const add_cart = (cart_products: Product): ShopAction => ({
    type: ShopActionType.ADD_TO_CART,
    payload: cart_products,
});
  
export const remove_cart = (cart_products: Product): ShopAction => ({
    type: ShopActionType.REMOVE_FROM_CART,
    payload: cart_products,
});

export const update_cart_qty = (cart_products: Product): ShopAction => ({
    type: ShopActionType.UPDATE_CART_QTY,
    payload: cart_products,
});

export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE_TOTAL,
    payload: total,
});

export const add_wish = (wish_products: Product): ShopAction => ({
    type: ShopActionType.ADD_TO_WISH,
    payload: wish_products,
});

export const remove_wish = (wish_products: Product): ShopAction => ({
    type: ShopActionType.REMOVE_FROM_WISH,
    payload: wish_products,
});

export const add_checkout = (checkout_products: Product): ShopAction => ({
    type: ShopActionType.ADD_TO_CART,
    payload: checkout_products,
});
  
export const clear_checkout = (checkout_products: Product): ShopAction => ({
    type: ShopActionType.REMOVE_FROM_CART,
    payload: checkout_products,
});
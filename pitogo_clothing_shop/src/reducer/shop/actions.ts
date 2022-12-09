
import { Product } from "../../models";
import { CartState } from "./state";

export enum CartActionType {
    ADD_TO_CART = 'add',
    REMOVE_FROM_CART = 'remove',
    UPDATE_TOTAL = 'update',
}
  
export type CartAction = {
    type: CartActionType;
    payload: any;
};
  
export const add = (product: Product): CartAction => ({
    type: CartActionType.ADD_TO_CART,
    payload: product,
});
  
export const remove = (product: Product): CartAction => ({
    type: CartActionType.REMOVE_FROM_CART,
    payload: product,
});

export const update = (total: number): CartAction => ({
    type: CartActionType.UPDATE_TOTAL,
    payload: total,
});
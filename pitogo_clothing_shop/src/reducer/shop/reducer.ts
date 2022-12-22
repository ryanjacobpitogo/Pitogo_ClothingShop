import { ShopAction, ShopActionType } from './actions';

import { ShopState } from './state';

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD_TO_CART:
      return {
        ...state,
        cart_products: action.payload,
      };

    case ShopActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart_products: action.payload,
      };

    case ShopActionType.UPDATE_TOTAL:
    return {
        ...state,
        total: action.payload,
      };

    case ShopActionType.ADD_TO_WISH:
      return {
        ...state,
        wish_products: action.payload,
      };
      
    case ShopActionType.REMOVE_FROM_WISH:
      return {
        ...state,
        wish_products: action.payload,
      };
    default:
      return state;
  }
};
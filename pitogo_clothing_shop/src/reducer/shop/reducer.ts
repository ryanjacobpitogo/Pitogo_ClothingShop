import { CartAction, CartActionType } from './actions';

import { CartState } from './state';

export const shopReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART:
      return {
        ...state,
        products: action.payload,
      };

    case CartActionType.REMOVE_FROM_CART:
      return {
        ...state,
        products: action.payload,
      };

    case CartActionType.UPDATE_TOTAL:
    return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};
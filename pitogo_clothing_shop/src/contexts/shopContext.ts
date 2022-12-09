import { createContext } from 'react';
import { CartState, initCartState } from '../reducer/shop';

export const ShopContext = createContext<CartState>(initCartState);

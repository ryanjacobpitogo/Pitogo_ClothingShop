import { createContext } from 'react';
import { ShopState, initShopState } from '../reducer/shop';

export const ShopContext = createContext<ShopState>(initShopState);

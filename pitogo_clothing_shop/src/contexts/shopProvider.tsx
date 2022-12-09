import { ShopContext } from './shopContext';
import { useContext, useReducer } from 'react';
import { add, CartActionType, remove, initCartState, update, shopReducer } from '../reducer/shop';
import { Product } from '../models';

type ShopProviderProps = {
  children : React.ReactNode
}

export const ShopProvider = ( props : ShopProviderProps ) => {
    const [state, dispatch] = useReducer(shopReducer, initCartState);
  
    const addToCart = (product: Product) => {
      const updatedCart = state.products.concat(product);
      updatePrice(updatedCart);
      
      dispatch(add(updatedCart));
    };
  
    const removeFromCart = (product: Product) => {
      const updatedCart = state.products.filter(
        (currentProduct: Product) => currentProduct.name !== product.name
      );
      updatePrice(updatedCart);
  
      dispatch(remove(updatedCart));
    };
  
    const updatePrice = (products: [] = []) => {
      let total = 0;
      products.forEach((product: {price: number}) => (total += product.price));
  
      dispatch(update(total));
      
    };
  
    const value = {
      products: state.products,
      total: state.total,
      addToCart,
      removeFromCart
    };
    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
  };

  const useShop = () => {
    const context = useContext(ShopContext);
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext");
    }
  
    return context;
  };
  
  export default useShop;
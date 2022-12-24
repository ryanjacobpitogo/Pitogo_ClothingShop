import { ShopContext } from './shopContext';
import { useContext, useEffect, useReducer } from 'react';
import { add_cart, remove_cart, initShopState, update, shopReducer, add_wish, remove_wish, clear_wish, update_cart_qty, add_checkout, clear_checkout, clear_cart } from '../reducer/shop';
import { Product } from '../models';

type ShopProviderProps = {
  children : React.ReactNode
}

export const ShopProvider = ( props : ShopProviderProps ) => {
    const [state, dispatch] = useReducer(shopReducer, initShopState);
    
    useEffect(() => {
    }, [state.total])
    
    const addToCart = (product: Product) => {
      const updatedCart = state.cart_products.concat(product);
      updatePrice(updatedCart);
      
      dispatch(add_cart(updatedCart));
    };
  
    const removeFromCart = (product: Product) => {
      const updatedCart = state.cart_products.filter(
        (currentProduct: Product) => currentProduct.name !== product.name
      );
      updatePrice(updatedCart);
      
      dispatch(remove_cart(updatedCart));
    };

    const clearCart = (products: Product[]) => {
      dispatch(clear_cart([]));
    };

    const updateCartQty = (product: any) => {
      const updatedCart = state.cart_products.map(
        (item: any) => item.name === product.name ? {...item, qty: product.temp} : item
        );

      dispatch(update_cart_qty(updatedCart));
      updatePrice(updatedCart);
    }
  
    const updatePrice = (products: [] = []) => {
      let total = 0;
      products.forEach((product: Product) => total += product.price * product.qty);
      
      dispatch(update(total));
    };

    const addToWish = (product: Product) => {
      const updatedCart = state.wish_products.concat(product);
      
      dispatch(add_wish(updatedCart));
    };

    const removeFromWish = (product: Product) => {
      const updatedCart = state.wish_products.filter(
        (currentProduct: Product) => currentProduct.name !== product.name
      );
      
      dispatch(remove_wish(updatedCart));
    };

    const clearWish = (products: Product[]) => {
      dispatch(clear_wish([]));
    };

    const addToCheckout = () => {
      dispatch(add_checkout(true));
    };

    const clearCheckout = () => {
      dispatch(clear_checkout(false));
    };
  
    const value = {
      cart_products: state.cart_products,
      wish_products: state.wish_products,
      showCheckout: state.showCheckout,
      total: state.total,
      addToCart,
      removeFromCart,
      clearCart,
      updateCartQty,
      addToWish,
      removeFromWish,
      clearWish,
      addToCheckout,
      clearCheckout
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
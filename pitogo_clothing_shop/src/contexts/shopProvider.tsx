import { ShopContext } from './shopContext';
import { useContext, useEffect, useReducer } from 'react';
import { add_cart, remove_cart, initShopState, update, shopReducer, add_wish, remove_wish, update_cart_qty } from '../reducer/shop';
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
      console.log("totes",total);

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
  
    const value = {
      cart_products: state.cart_products,
      wish_products: state.wish_products,
      checkout_products: state.checkout_products,
      total: state.total,
      addToCart,
      removeFromCart,
      updateCartQty,
      addToWish,
      removeFromWish
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
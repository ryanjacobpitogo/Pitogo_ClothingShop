import { useEffect, useState } from 'react';
import useShop from '../../contexts/shopProvider';
import { CartCard } from '../CartCard';
import { ProductsWrapper, Title } from './Cart.styled';


export const Cart = () => {
  const { cart_products, total } = useShop();

  const handleCheckout = () => {
    
  }

  return (
    <>
      <Title> {!cart_products.length ? "Cart is empty" : `Your cart total is ${total}.00$`} </Title>
      <ProductsWrapper>
        {cart_products.map((product, index) => (
          <CartCard {...product} key={index}/>
        ))}
      </ProductsWrapper>
      <button onClick={handleCheckout}>CHECKOUT</button>
      <button>CLEAR CART</button>
    </>
  );
};

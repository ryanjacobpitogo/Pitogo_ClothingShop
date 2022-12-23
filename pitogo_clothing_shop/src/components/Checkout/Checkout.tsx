import { useEffect } from "react";
import { Link } from "react-router-dom";
import useShop from "../../contexts/shopProvider";
import { clear_cart } from "../../reducer/shop";
import { CheckoutCard } from "../CheckoutCard";
import { ProductsWrapper, Title, ButtonsWrapper, OrderLink, CancelLink } from './Checkout.styled';

export const Checkout = () => {
    const { cart_products, showCheckout, clearCart, clearCheckout, total } = useShop();

    return (
      <>
        <Title> {!showCheckout || !cart_products.length ? "Checkout is empty" : `Your checkout total is ${total}.00$`} </Title>
        <ProductsWrapper>
          {showCheckout && cart_products.map((product, index) => (
            <CheckoutCard {...product} key={index}/>
          ))}
        </ProductsWrapper>
        {
        showCheckout ?
        <ButtonsWrapper>
          <OrderLink to='/' onClick={() => clearCart()}>ORDER</OrderLink>
          <CancelLink to='/cart' onClick={() => clearCheckout()}>CANCEL</CancelLink>
        </ButtonsWrapper>
        :
        <></>
        }
      </>
    );
  };
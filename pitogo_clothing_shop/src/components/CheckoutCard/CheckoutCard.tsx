import { useEffect, useState } from "react";
import useShop from "../../contexts/shopProvider";
import { Product } from "../../models";
import {
    CartButton,
    SubTitle,
    TextContainer,
    Title,
    Wrapper,
  } from './CheckoutCard.styled';

export const CheckoutCard = ({ name, imageUrl, price, qty }: Product) => {
    const { checkout_products, addToCart, removeFromCart, updateCartQty} = useShop();
    const [isInCheckout, setIsInCheckout] = useState(false);
    const [tempQty, setTempQty] = useState(qty);
  
  
    const handleCheckout = () => {
      const product = { name, imageUrl, price, qty };
    //   isInCart ? removeFromCart(product) : addToCart(product);
    };
    
    
    return (
      <Wrapper background={imageUrl}>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>{price}.00$</SubTitle>
          <SubTitle>
            Qty: 
            {qty} 
          </SubTitle>
        </TextContainer>
      </Wrapper>
    );
  };

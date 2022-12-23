import {
  CartButton,
  WishButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';
import { AiFillGift, AiOutlineGift } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";

import { Product } from '../../models';
import { useEffect, useState } from 'react';
import useShop from '../../contexts/shopProvider';


export const ProductCard = ({ name, imageUrl, price, qty }: Product) => {
  const { cart_products, wish_products, addToCart, removeFromCart, addToWish, removeFromWish } = useShop();
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);

  useEffect(() => {
    const productIsInCart = cart_products.find((product) => product.name === name);
    const productIsInWish = wish_products.find((product) => product.name === name);

    productIsInCart ? setIsInCart(true) : setIsInCart(false);
    productIsInWish ? setIsInWish(true) : setIsInWish(false);
  }, [cart_products, wish_products, name]);

  const handleCart = () => {
    const product = { name, imageUrl, price, qty };

    isInCart ? removeFromCart(product) : addToCart(product);
    
  };
  const handleWish = () => {
    const product = { name, imageUrl, price, qty };

    isInWish ? removeFromWish(product) : addToWish(product);
    
  };
  
  return (
    <Wrapper background={imageUrl}>
      <CartButton isInCart={isInCart} onClick={handleCart}>
        <p>{isInCart ? <BsFillCartDashFill/> : <BsFillCartCheckFill/>}</p>
      </CartButton>
      <WishButton isInWish={isInWish} onClick={handleWish}>
        <p>{isInWish ? <AiFillGift/> : <AiOutlineGift/>}</p>
      </WishButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};

import {
  WishButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './WishCard.styled';

import { Product } from '../../models';
import { useEffect, useState } from 'react';
import useShop from '../../contexts/shopProvider';



export const WishCard = ({ name, imageUrl, price, qty }: Product) => {
  const { wish_products, addToWish, removeFromWish } = useShop();
  const [isInWish, setIsInWish] = useState(false);

  useEffect(() => {
    const productIsInWish = wish_products.find((product) => product.name === name);

    productIsInWish ? setIsInWish(true) : setIsInWish(false);
  }, [wish_products, name]);

  const handleWish = () => {
    const product = { name, imageUrl, price, qty };

    isInWish ? removeFromWish(product) : addToWish(product);
    
  };
  
  return (
    <Wrapper background={imageUrl}>
      <WishButton isInWish={isInWish} onClick={handleWish}>
        <p>{isInWish && '-'}</p>
      </WishButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};

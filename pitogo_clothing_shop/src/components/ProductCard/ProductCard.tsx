import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import { useEffect, useState } from 'react';
import useShop from '../../contexts/shopProvider';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };
  
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart ? '-' : '+'}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};

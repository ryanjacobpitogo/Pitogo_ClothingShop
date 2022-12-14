import { useEffect, useState } from "react";
import useShop from "../../contexts/shopProvider";
import { Product } from "../../models";
import {
    CartButton,
    MinusIcon,
    PlusIcon,
    QuantityInput,
    QuantityWrapper,
    SubTitle,
    TextContainer,
    Title,
    Wrapper,
  } from './CartCard.styled';

export const CartCard = ({ name, imageUrl, price, qty }: Product) => {
    const { cart_products, addToCart, removeFromCart, updateCartQty} = useShop();
    const [isInCart, setIsInCart] = useState(false);
  
    useEffect(() => {
      const productIsInCart = cart_products.find((product) => product.name === name);

      productIsInCart ? setIsInCart(true) : setIsInCart(false);
    }, [cart_products, qty, name]);
  
    const handleCart = () => {
      const product = { name, imageUrl, price, qty };
      isInCart ? removeFromCart(product) : addToCart(product);
    };

    const handleQty = (e: React.FormEvent<HTMLInputElement>) => {
      let temp = e.currentTarget.value;
      if(!isNaN(parseInt(temp)) && parseInt(temp) > 0){
        const product = { name, imageUrl, price, temp};
        updateCartQty(product);
      }
    }
    
    const addQty = () => {
      let temp = qty + 1;
      const product = { name, imageUrl, price, temp};
      updateCartQty(product);
    }
    
    const subtQty = () => {
      let temp;
      qty - 1 === 0 ? temp = qty: temp = qty-1;
      const product = { name, imageUrl, price, temp};
      updateCartQty(product);
    }

    return (
      <Wrapper background={imageUrl}>
        <CartButton isInCart={isInCart} onClick={handleCart}>
          <p>{isInCart ? '-' : '+'}</p>
        </CartButton>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>Unit Price: {price}.00$</SubTitle>
          <SubTitle>
            Qty: 
            <QuantityWrapper>
            <MinusIcon onClick={subtQty}/>
            <QuantityInput onChange= {handleQty} placeholder={`${qty}`} type="number" min="1"/> 
            <PlusIcon onClick={addQty}/>
            </QuantityWrapper>
          </SubTitle>
        </TextContainer>
      </Wrapper>
    );
  };

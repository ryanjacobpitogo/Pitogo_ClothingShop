import { useEffect, useState } from "react";
import useShop from "../../contexts/shopProvider";
import { Product } from "../../models";
import {
    CartButton,
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
    
    // const handleCheckout = () => {
    //   const product = { name, imageUrl, price, tempQty };
    // }

    const handleQty = (e: React.FormEvent<HTMLInputElement>) => {
      let temp = e.currentTarget.value;
      if(!isNaN(parseInt(temp)) && parseInt(temp) > 0){
        const product = { name, imageUrl, price, temp};
        updateCartQty(product);
        console.log(qty);
      }
    }
    
    return (
      <Wrapper background={imageUrl}>
        <CartButton isInCart={isInCart} onClick={handleCart}>
          <p>{isInCart ? '-' : '+'}</p>
        </CartButton>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>{price}.00$</SubTitle>
          <SubTitle>
            Qty: 
            <input onChange= {handleQty} placeholder={`${qty}`} type="number" min="1"/> 
          </SubTitle>
        </TextContainer>
      </Wrapper>
    );
  };

import { Product } from "../../models";
import {
    SubTitle,
    Subtotal,
    SubtotalContainer,
    TextContainer,
    Title,
    Wrapper,
  } from './CheckoutCard.styled';

export const CheckoutCard = ({ name, imageUrl, price, qty }: Product) => {
  
    return (
      <Wrapper background={imageUrl}>
        <TextContainer qty={qty}>
          <Title>{name}</Title>
          <SubTitle>Unit Price: {price}.00$</SubTitle>
          <SubTitle>
            Qty: {qty} 
          </SubTitle>
          {qty > 1 ?
          <SubtotalContainer>
            <Subtotal> Subtotal: {price * qty}.00$</Subtotal>
          </SubtotalContainer>
          : <></> }
        </TextContainer>
      </Wrapper>
    );
  };

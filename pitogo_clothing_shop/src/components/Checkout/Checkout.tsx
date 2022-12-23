import useShop from "../../contexts/shopProvider";
import { CheckoutCard } from "../CheckoutCard";
import { ProductsWrapper, Title } from './Checkout.styled';

export const Checkout = () => {
    const { checkout_products, total } = useShop();
    
    return (
      <>
        <Title> {!checkout_products.length ? "Checkout is empty" : `Your cart total is ${total}.00$`} </Title>
        <ProductsWrapper>
          {checkout_products.map((product, index) => (
            <CheckoutCard {...product} key={index}/>
          ))}
        </ProductsWrapper>
      </>
    );
  };
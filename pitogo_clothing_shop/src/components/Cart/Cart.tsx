import useShop from '../../contexts/shopProvider';
import { ProductCard } from '../ProductCard';
import { ProductsWrapper, Title } from './Cart.styled';

export const Cart = () => {
  const { cart_products, total } = useShop();
  
  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {cart_products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};

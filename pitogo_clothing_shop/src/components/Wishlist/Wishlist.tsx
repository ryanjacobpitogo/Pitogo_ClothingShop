import useShop from "../../contexts/shopProvider";
import { ProductCard } from '../ProductCard';
import { ProductsWrapper, Title } from './Wishlist.styled';

export const Wishlist = () => {
    const { products, total } = useShop();
    
    return (
      <>
        <Title>Your cart total is {total}.00$</Title>
        <ProductsWrapper>
          {products.map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </ProductsWrapper>
      </>
    );
  };
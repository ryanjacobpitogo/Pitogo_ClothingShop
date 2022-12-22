import useShop from "../../contexts/shopProvider";
import { ProductCard } from '../ProductCard';
import { ProductsWrapper, Title } from './Wishlist.styled';

export const Wishlist = () => {
    const { wish_products } = useShop();
    
    return (
      <>
        <ProductsWrapper>
          {wish_products.map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </ProductsWrapper>
      </>
    );
  };
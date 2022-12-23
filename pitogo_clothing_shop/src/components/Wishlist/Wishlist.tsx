import useShop from "../../contexts/shopProvider";
import { WishCard } from '../WishCard';
import { ProductsWrapper, Title } from './Wishlist.styled';

export const Wishlist = () => {
    const { wish_products } = useShop();
    return (
      <>
        <Title> {!wish_products.length ? "Wishlist is empty" : "Wishlist"} </Title>
        <ProductsWrapper>
          {wish_products.map((product, index) => (
            <WishCard {...product} key={index}/>
          ))}
        </ProductsWrapper>
      </>
    );
  };
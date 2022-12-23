import useShop from "../../contexts/shopProvider";
import { ButtonsWrapper } from "../Wishlist";
import { WishCard } from '../WishCard';
import { ClearLink, ProductsWrapper, Title } from './Wishlist.styled';

export const Wishlist = () => {
    const { wish_products, clearWish } = useShop();
    return (
      <>
        <Title> {!wish_products.length ? "Wishlist is empty" : "Your Wishlist"} </Title>
        <ProductsWrapper>
          {wish_products.map((product, index) => (
            <WishCard {...product} key={index}/>
          ))}
        </ProductsWrapper>
        {
        wish_products.length ?
        <ButtonsWrapper>
          <ClearLink to='/' onClick={() => clearWish()}>CLEAR WISHLIST</ClearLink>
        </ButtonsWrapper> 
        :
        <></>
        }
      </>
    );
  };
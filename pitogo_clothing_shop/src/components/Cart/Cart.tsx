import useShop from '../../contexts/shopProvider';
import { CartCard } from '../CartCard';
import { ButtonsWrapper, CheckoutLink, ClearLink, ProductsWrapper, Title } from './Cart.styled';


export const Cart = () => {
  const { cart_products, clearCart, total, addToCheckout } = useShop();

  return (
    <>
      <Title> {!cart_products.length ? "Cart is empty" : `Your cart total is ${total}.00$`} </Title>
      <ProductsWrapper>
        {cart_products.map((product, index) => (
          <CartCard {...product} key={index}/>
        ))}
      </ProductsWrapper>
      {
        cart_products.length ?
        <ButtonsWrapper>
          <CheckoutLink to='/checkout' onClick={() => addToCheckout()}>CHECKOUT</CheckoutLink>
          <ClearLink to='/' onClick={() => clearCart()}>CLEAR CART</ClearLink>
        </ButtonsWrapper>
        :
        <></>
      }
    </>
  );
};

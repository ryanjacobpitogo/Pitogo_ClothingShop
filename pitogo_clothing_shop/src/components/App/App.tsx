import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';
import { Cart } from '../Cart';
import { Products } from '../Products';
import { ShopProvider } from '../../contexts';
import { Wishlist } from '../Wishlist/Wishlist';

export const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/wishlist'>Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </Wrapper>
    </ShopProvider>
  );
};

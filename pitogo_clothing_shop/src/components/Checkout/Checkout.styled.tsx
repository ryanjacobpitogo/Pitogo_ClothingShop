import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const ButtonsWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: center;
 padding-top: 1.5em;
`

export const OrderLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  margin-right: 5vw;
  border-radius: 3em;
  background: #60c95d;
  padding: 1.5vh 3vw 1.5vh 3vw;
  text-decoration-color: transparent;
  :hover {
    transform: scale(1.2);
    background: #24de1f;
    text-decoration-color: white;
    transition: 1s;
  }
`

export const CancelLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  background: #E55336;
  border-radius: 3em;
  padding: 1.5vw 3vw 1.5vw 3vw;
  text-decoration-color: transparent;
  :hover {
    transform: scale(1.2);
    background: #f03c18;
    text-decoration-color: white;
    transition: 1s;
  }
`
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

type WrapperProps = {
  background: string;
};

type CartButtonProps = {
  isInCart: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const CartButton = styled.div<CartButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInCart ? '#E55336' : '#60c95d')};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 20px 20px 20px 0;
`;

export const Title = styled.p`
  font-weight: 500;
  font-style: normal;
  padding-left: 0.7em;
  font-size: 24px;
  margin: 0;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  padding-left: 1.2em;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

export const QuantityWrapper = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  width: 5em;
  height: 2em;
  border: 2px rgba(255, 255, 255, 0.8) solid;
  padding: 0 1em 0 1em;
  margin-left: 1em;
  border-radius: 3em;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  transition: 0.3s;
`;

export const QuantityInput = styled.input`
  font-size: 1em;
  text-align: center;
  background: none;
  color: white;
  font-weight:bold;
  width: 100%;
  border: none;

  :focus{
    border:none;
    outline:none;
  }
  ::placeholder{
    color: rgba(255, 255, 255, 1);
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 2em;
  color: white;
`;

export const MinusIcon = styled(FaMinus)`
  font-size: 2em;
  color: white;
`;

export const Subtotal = styled.p`
  font-weight: bold;
  font-size: 15px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;
export const SubtotalContainer = styled.div`
  display: grid;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  width: 100%;
  padding: 20px;
`;
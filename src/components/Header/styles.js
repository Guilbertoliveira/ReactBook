import styled from 'styled-components';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { MdMenuBook } from 'react-icons/md';

export const HeaderStyled = styled.header`
  background: ${(props) => (props.scroll ? 'transparent' : 'white')};
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.84);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: fixed;
  z-index: 1;
  align-items: center;
  transition: 1s;
  width: 100vw;

  @media screen and (max-width: 610px) {
    justify-content: space-between;
  }
`;

export const HeaderLogoStyled = styled.div`
  display: flex;
  font-size: 20px;
  gap: 10px;
  margin-left: 20px;
  align-items: center;
`;

export const IconeMenuAltStyled = styled(MdMenuBook)`
  color: ${(props) => (props.scroll ? 'white' : 'orange')};
  transition: 1s;
  margin-right: 20px;
  display: none;

  @media screen and (max-width: 610px) {
    display: block;
  }
`;

export const IconeMenuStyled = styled(BiSolidFoodMenu)`
  color: ${(props) => (props.scroll ? 'white' : 'orange')};
  margin-right: 20px;
  display: none;
  @media screen and (max-width: 610px) {
    display: block;
  }
`;

export const ButtonStyled = styled.button`
  border: none;
  padding: 5px 20px;
  border-radius: 2px;
  color: ${(props) => (props.scroll ? 'white' : 'black')};
  background-color: ${(props) => (props.scroll ? 'transparent' : 'white')};
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.24);
  text-transform: uppercase;

  @media screen and (max-width: 610px) {
    display: none;
  }
`;

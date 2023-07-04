import styled from 'styled-components';

export const MenuStyled = styled.div`
  background-color: rgba(0, 47, 82, 0.97);
  width: 20%;
  position: absolute;
  right: 5px;
  top: 70px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.55);
  color: white;
  height: 40vh;
  border-radius: 2px;
  z-index: 99999;
  @media screen and (max-width: 610px) {
    height: 90vh;
    width: 98vw;
  }
`;

export const NavStyled = styled.nav`
  text-align: center;
`;

export const LiStyled = styled.p`
  font-size: 24px;
  text-transform: uppercase;
`;

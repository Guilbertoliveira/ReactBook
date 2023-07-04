import styled from 'styled-components';

export const NavStyled = styled.nav`
  margin-left: 10px;

  @media screen and (max-width: 610px) {
    display: none;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  list-style: none;
  font-size: 16px;
  padding: 0px 10px;
  gap: 20px;
  cursor: pointer;
  flex-wrap: wrap;
`;

export const LiStyled = styled.li`
  font-weight: 400;
  text-transform: uppercase;
`;

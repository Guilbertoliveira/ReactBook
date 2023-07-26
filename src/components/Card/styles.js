import styled from 'styled-components';

export const CardStyled = styled.section`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
    border-radius: 3px;
  }
`;

export const ImgStyled = styled.img`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.03);
  width: 300px;
  height: 420px;
`;

export const DivFavoriteStyled = styled.div`
  left: 5px;
  top: 45px;
  display: flex;
  position: relative;
`;

export const PStyled = styled.p`
  display: none;
`;

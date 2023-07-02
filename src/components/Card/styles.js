import styled from 'styled-components';


export const CardStyled = styled.section`
  transition: transform 0.3s ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
    border-radius: 3px;
  }
`;

export const ImgStyled = styled.img`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.03);
  width: 300px;
  height: 420px;
`;

export const DivFavoriteStyled = styled.div`
  position: relative;
  left: 135px;
  top: 95px;
  display: inline-block;
`;


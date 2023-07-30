import styled from 'styled-components';

export const CardStyled = styled.section`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: scale(1.06);
    border-radius: 3px;
  }
`;

export const ImgStyled = styled.img`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.03);
  width: 300px;
  height: 420px;
`;

export const DivFavoriteStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
`;

export const PStyled = styled.p`
  display: none;
`;

export const CategoryStyled = styled.p`
  display: none;
`;

export const TitleStyled = styled.h3`
  text-overflow: ellipsis;
  overflow: hidden;
  height: 27px;
  width: 250px;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Number of lines to show */
  -webkit-box-orient: vertical;
`;

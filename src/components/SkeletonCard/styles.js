import styled from 'styled-components';

export const CardStyled = styled.section`
  transition: transform 0.3s ease;
  cursor: default;
  pointer-events: none;
`;

export const ImgStyled = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.03);
  width: 300px;
  height: 420px;
  background-color: rgba(221, 221, 223, 0.3);
  border-radius: 2px;
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
  background-color: rgba(221, 221, 223, 0.3);
  border-radius: 10px;
`;

import styled from 'styled-components';

export const CardRecomStyled = styled.section`
  display: flex;
  flex-direction: row;
  width: 50%;
  color: white;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  margin: 20px auto;
  font-family: 'Roboto Slab', serif;
  padding: 10px;
  background-color: rgba(38, 64, 167, 0.6);
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const ImgStyled = styled.img`
  width: 100%;
  margin-top: 10px;
`;

export const ContainerSecundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContainerFirstStyled = styled.div`
  text-align: start;
`;

export const BtnStyled = styled.button`
  border: none;
  background-color: #f6ac25;
  color: white;
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 5px 10px;
`;

export const TitleStyled = styled.h3`
  color: #f6ac25;
`;

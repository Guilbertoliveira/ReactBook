import styled from 'styled-components';
import imageBoat from './teste.svg'

export const SearchStyled = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
  font-family: 'Acme', sans-serif;
  filter: ${(props) => (props.clicktrue ? 'brightness(0.1)' : 'brightness(1)')};
  transition: 1s;
`;

export const TitleStyled = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;

  &::after {
    content: '';
    display: inline-block;
    width: 30px; 
    height: 30px; 
    background-image: url(${imageBoat}); 
    background-size: cover;
    margin-left: 10px; 
  }
`;

export const SubTitleStyled = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const ShowcaseBookStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  transition: 1s;
`;

export const InputSpanStyled = styled.span`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  transition: 1s;
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 2px;
  padding: 5px 30px;
  color: white;
  font-size: 20px;
  font-family: 'Acme', sans-serif;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.34);
`;

import styled from 'styled-components';
import imageBoat from './assets/icon.svg';

export const OpenCardStyled = styled.section`
  background-color: rgba(0, 47, 81, 0.99);
  width: 100%;
  position: fixed;
  top: 20%;
  height: 70%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardStyled = styled.aside`
  height: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
`;

export const ImgCardStyled = styled.img`
  height: 90%;
  margin-top: 10px;
`;

export const DivDescribeStyled = styled.div`
  margin: 40px;
  width: 40vw;
  word-wrap: break-word;
`;

export const TitleStyled = styled.h2`
  font-size: 40px;
`;

export const PStyled = styled.p`
  font-size: 18px;
  overflow: hidden;
  height: 40%;
`;

export const PCategoryStyled = styled.p`
  background-color: gray;
  border-radius: 8px;
  font-size: 12px;
  padding: 5px 18px;
  font-family: 'Acme', sans-serif;
`;

export const SpanStyled = styled.span`
  display: flex;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: orange;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  color: white;
  font-family: 'Acme', sans-serif;
  margin: 0 auto;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url(${imageBoat});
    background-size: cover;
    margin-left: 10px;
    position: absolute;
    top: -20px;
    left: 60px;
  }
`;

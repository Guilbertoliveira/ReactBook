import styled from 'styled-components';

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
  width: 30vw;
  word-wrap: break-word;
`;

export const TitleStyled = styled.h2`
  font-size: 40px;
`;

export const PStyled = styled.p`
  font-size: 18px;
`;

export const PCategoryStyled = styled.p`
  background-color: gray;
  border-radius: 8px;
  font-size: 10px;
  padding: 5px;
`;

export const SpanStyled = styled.span`
  display: flex;
  gap: 10px;
`;

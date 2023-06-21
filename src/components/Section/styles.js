import styled from 'styled-components';

export const SectionStyled = styled.section`
  text-align: center;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  font-family: 'Acme', sans-serif;
  font-size: 20px;
`;

export const SubTitleStyled = styled.h2`
  font-family: 'Acme', sans-serif;
  padding-top: 30px;
  font-size: 40px;
`;

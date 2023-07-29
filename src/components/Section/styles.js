import styled from 'styled-components';

export const SectionStyled = styled.section`
  text-align: center;
  color: ${(props) => props.fontColor || 'white'};
  background-color: ${(props) => props.backgroundColor || '#002F52'};
  font-family: 'Acme', sans-serif;
  font-size: 20px;
  padding: 30px 0px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 0;
  filter: ${(props) => (props.clicktrue ? 'brightness(0.1)' : 'brightness(1)')};
  transition: 1s;
`;

export const SubTitleStyled = styled.h2`
  font-family: 'Acme', sans-serif;
  padding-top: 30px;
  font-size: 40px;
  z-index: 0;
`;

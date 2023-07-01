import styled from 'styled-components';
import { CgMenuRightAlt } from 'react-icons/cg';

export const HeaderStyled = styled.header`
  background: ${(props) => (props.scroll ? 'transparent' : 'white')};
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.54);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;
  align-items: center;
  transition: 1s;
`;

export const HeaderLogoStyled = styled.div`
  display: flex;
  font-size: 20px;
  gap: 10px;
  margin-left: 20px;
  align-items: center;

`;

export const IconeMenuStyled = styled(CgMenuRightAlt)`
  color: ${(props) => (props.scroll ? 'white' : 'black')};
`;

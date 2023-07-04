import styled from 'styled-components';

export const Input = styled.input`
  background: transparent;
  border: 1px solid #fff;
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    color: #fff;
    font-size: 16px;
    font-family: 'Acme', sans-serif;
  }

  &:focus {
    outline: none;
    border: 1px solid #fc7423;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 10px;
  }
`;

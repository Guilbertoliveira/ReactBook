import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.54);
  width: 300px;
  height: 300px;
  padding: 50px;
  border-radius: 40px;
  font-family: 'Acme', sans-serif;
`;

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsla(0, 100%, 50%, 1);
  background-image: radial-gradient(
      at 50% 100%,
      hsla(200, 100%, 24%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(220, 100%, 26%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 30%, hsla(200, 100%, 23%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(200, 100%, 26%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(222, 100%, 27%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, hsla(220, 100%, 20%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(222, 100%, 26%, 1) 0px, transparent 50%);
`;

export const EmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const PasswordStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  font-size: 30px;
`;

export const ButtonStyled = styled.button`
  border: none;
  padding: 10px 30px;
  border-radius: 15px;
  font-family: 'Acme', sans-serif;
  font-size: 24px;
`;

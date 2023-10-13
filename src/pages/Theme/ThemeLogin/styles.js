import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.99);
  width: 300px;
  height: 300px;
  padding: 50px;
  border-radius: 40px;
  font-family: 'Acme', sans-serif;
  background-color: rgba(0, 47, 82, 0.89);
`;

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/05/nota-livros-jornalismo.jpg?quality=100&strip=info&w=1280&h=720&crop=1');
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

import { useState } from 'react';
import * as S from './styles';
import { useContext } from 'react';
import { AuthContext } from 'context/auth';
import Register from 'pages/Register';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticated, login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
    login(email, password);
    setEmail('');
    setPassword('');
  }




  return (
    <S.FormStyled onSubmit={handleSubmit}>
      <S.EmailStyled>
        <label>Login</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </S.EmailStyled>
      <S.PasswordStyled>
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </S.PasswordStyled>
      <S.ButtonStyled>Entrar</S.ButtonStyled>
      <Link to='/cadastro' style={{ color: 'white' }}>Ainda não possui uma conta? Cadastre-se!</Link>
    </S.FormStyled>


  );
}

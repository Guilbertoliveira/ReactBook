import { Link } from 'react-router-dom';
import * as S from './styles';
import { useContext } from 'react';
import { AuthContext } from 'context/auth';

export default function Menu() {
  const textOptions = [
    { titleNav: 'Categorias', url: 'categoria' },
    { titleNav: 'Favoritos', url: 'favoritos' },
    { titleNav: 'Minha estante', url: 'estante' },
  ];

  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
  }

  return (
    <S.MenuStyled>
      <S.NavStyled>
        {textOptions.map((text, index) => (
          <S.LiStyled key={index}>
            <Link
              to={text.url}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {text.titleNav}
            </Link>
          </S.LiStyled>
        ))}
      </S.NavStyled>
      <button onClick={handleLogout}>Logout</button>
    </S.MenuStyled>
  );
}

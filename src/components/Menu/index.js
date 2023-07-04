import { Link } from 'react-router-dom';
import { MenuStyled, NavStyled, LiStyled } from './styles';

export default function Menu() {
  const textOptions = [
    { titleNav: 'Categorias', url: 'categoria' },
    { titleNav: 'Favoritos', url: 'favoritos' },
    { titleNav: 'Minha estante', url: 'estante' },
  ];

  return (
    <MenuStyled>
      <NavStyled>
        {textOptions.map((text, index) => (
          <LiStyled key={index}>
            <Link
              to={text.url}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {text.titleNav}
            </Link>
          </LiStyled>
        ))}
      </NavStyled>
    </MenuStyled>
  );
}

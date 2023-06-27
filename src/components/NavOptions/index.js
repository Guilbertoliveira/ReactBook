import { Link } from 'react-router-dom';
import { NavStyled, ListStyled, LiStyled } from './styles';

export default function NavOptions() {
  const textOptions = [
    { titleNav: 'Categorias', url: 'categoria' },
    { titleNav: 'Favoritos', url: 'favoritos' },
    { titleNav: 'Minha estante', url: 'estante' },
  ];

  return (
    <NavStyled>
      <ListStyled style={{}}>
        {textOptions.map((text) => (
          <LiStyled>
            <Link to={text.url} style={{ textDecoration: 'none' }}>
              {text.titleNav}
            </Link>
          </LiStyled>
        ))}
      </ListStyled>
    </NavStyled>
  );
}

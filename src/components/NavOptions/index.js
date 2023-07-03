import { Link } from 'react-router-dom';
import { NavStyled, ListStyled, LiStyled } from './styles';
import { useEffect, useState } from 'react';

export default function NavOptions() {
  const textOptions = [
    { titleNav: 'Categorias', url: 'categoria' },
    { titleNav: 'Favoritos', url: 'favoritos' },
    { titleNav: 'Minha estante', url: 'estante' },
  ];

  const [scrollColor, setScrollColor] = useState('');

  function scrollStatus() {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setScrollColor('white');
    } else {
      setScrollColor('black');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollStatus);
  }, []);

  return (
    <NavStyled>
      <ListStyled>
        {textOptions.map((text, index) => (
          <LiStyled key={index}>
            <Link
              to={text.url}
              style={{ textDecoration: 'none', color: scrollColor }}
            >
              {text.titleNav}
            </Link>
          </LiStyled>
        ))}
      </ListStyled>
    </NavStyled>
  );
}

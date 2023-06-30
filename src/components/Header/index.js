import { HeaderStyled, HeaderLogoStyled } from './styles';
import logo from './logo.svg';
import NavOptions from 'components/NavOptions';
import IconeHeader from 'components/IconeHeader';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scroll, setScroll] = useState(false)


  function scrollStatus() {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollStatus);

    return () => {
      window.removeEventListener('scroll', scrollStatus);
    };
  }, []);

  return (
    <HeaderStyled scroll={scroll}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HeaderLogoStyled>
          <img src={logo} alt="Logo cabeçalho do projeto"></img>
          <p>
            <strong>Alura</strong>Books
          </p>
        </HeaderLogoStyled>
      </Link>
      <NavOptions />
      <IconeHeader />
    </HeaderStyled>
  );
}

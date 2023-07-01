import {
  HeaderStyled,
  HeaderLogoStyled,
  ImgStyled,
  IconeMenuStyled,
} from './styles';
import logo from './avatarbook.png';
import NavOptions from 'components/NavOptions';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from 'components/Menu';


export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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


  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderStyled scroll={scroll}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HeaderLogoStyled>
          <img src={logo} alt="Logo cabeçalho do projeto" width={50}></img>
          <p style={{ color: 'black' }}>
            <strong>Reading</strong>Books
          </p>
        </HeaderLogoStyled>
      </Link>
      <NavOptions />
      <IconeMenuStyled scroll={scroll} onClick={() => toggle()} style={{ fontSize: 40 }} />
      {isOpen && <Menu />}
    </HeaderStyled>
  );
}

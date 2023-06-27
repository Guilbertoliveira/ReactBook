import { HeaderStyled, HeaderLogoStyled } from './styles';
import logo from './logo.svg';
import NavOptions from 'components/NavOptions';
import IconeHeader from 'components/IconeHeader';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderStyled>
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

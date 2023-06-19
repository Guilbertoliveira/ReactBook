import { HeaderComponent, HeaderLogo } from './styles';
import logo from './logo.svg';
import Nav from 'components/Nav';
import Icone from 'components/Icone';

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderLogo>
        <img src={logo} alt="Logo cabeçalho do projeto"></img>
        <p>
          <strong>Alura</strong>Books
        </p>
      </HeaderLogo>
      <Nav />
      <Icone />
    </HeaderComponent>
  );
}

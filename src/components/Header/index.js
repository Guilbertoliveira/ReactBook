import { HeaderComponent, HeaderLogo } from './styles';
import logo from './logo.svg';

export default function Header() {
  return (
    <HeaderComponent>
      <HeaderLogo>
        <img src={logo} alt="Logo cabeçalho do projeto"></img>
        <p>
          <strong>Alura</strong>Books
        </p>
      </HeaderLogo>
    </HeaderComponent>
  );
}

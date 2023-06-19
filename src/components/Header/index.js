import { HeaderComponent, HeaderLogo } from './styles';
import logo from './logo.svg';
import NavOptions from 'components/NavOptions';
import IconeHeader from 'components/IconeHeader';

export default function Header() {
    return (
        <HeaderComponent>
            <HeaderLogo>
                <img src={logo} alt="Logo cabeçalho do projeto"></img>
                <p>
                    <strong>Alura</strong>Books
                </p>
            </HeaderLogo>
            <NavOptions />
            <IconeHeader />
        </HeaderComponent>
    );
}

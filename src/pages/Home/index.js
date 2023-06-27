import Search from 'components/Search';
import Header from 'components/Header';
import { AppStyled } from './styles';
import Releases from 'components/Releases';

export default function Home() {
    return (
        <AppStyled>
            <Search />
            <Releases />
        </AppStyled>
    )
}
import Search from 'components/Search';
import Header from './components/Header';
import { AppStyled } from './styles';
import Releases from 'components/Releases';
import Section from 'components/Section';

function App() {
  return (
    <AppStyled>
      <Header />
      <Search />
      <Releases />
    </AppStyled>
  );
}

export default App;

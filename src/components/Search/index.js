import { Input } from 'components/Input';
import {
  SearchStyled,
  SubTitleStyled,
  TitleStyled,
  ShowcaseBookStyled,
  InputSpanStyled,
  ButtonStyled,
} from './styles';
import { useEffect, useState } from 'react';
import Card from 'components/Card';
import { getBooks, patchBooks } from 'services/books';
import { insertFavorites } from 'services/favorites';
import { useMemo } from 'react';
import OpenCard from 'components/OpenCard';
import ButtonVoice from 'components/ButtonVoice';

export default function Search() {
  const [book, setBook] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [clickOpen, setClickOpen] = useState(false);
  const [dataBookOpen, setDataBookOpen] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBook(booksAPI);
  }

  const filteredBooks = useMemo(() => {
    const escrita = new RegExp(searchValue, 'gi');
    return book.filter((e) => e.name.match(escrita)?.length);
  }, [book, searchValue]);

  async function clickBook(key, favoriteBoolean) {
    patchBooks(key, true);
    await insertFavorites(key);
    fetchBooks();
  }

  function clickBookFavorite(e) {
    setClickOpen(!clickOpen);
    document.body.style.overflow = !clickOpen ? 'hidden' : '';
    setDataBookOpen(e.children);
  }

  function returnVoice(text) {
    setSearchValue(text);
  }

  return (
    <>
      <SearchStyled clicktrue={clickOpen}>
        <TitleStyled>Ja sabe por onde começar?</TitleStyled>
        <SubTitleStyled>Encontre seu livro em nossa estante</SubTitleStyled>
        <InputSpanStyled>
          <Input
            placeholder="Escreva sua próxima leitura"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <ButtonVoice returnVoice={returnVoice}></ButtonVoice>
        </InputSpanStyled>
        <ShowcaseBookStyled>
          {filteredBooks.length >= 1 ? (
            filteredBooks.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.name}
                  imageUrl={item.src}
                  clickBook={clickBook}
                  id={item.id}
                  favorite={item.favorite}
                  clickBookFavorite={clickBookFavorite}
                  desc={item.describe}
                />
              );
            })
          ) : (
            <div>
              <TitleStyled>Livro procurado não foi encontrado</TitleStyled>
              <ButtonStyled onClick={() => setSearchValue('')}>
                Voltar
              </ButtonStyled>
            </div>
          )}
        </ShowcaseBookStyled>
      </SearchStyled>
      {clickOpen && <OpenCard bookOpen={dataBookOpen} />}
    </>
  );
}

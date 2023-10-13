import { Input } from 'components/Input';
import * as S from './styles';
import { useEffect, useState } from 'react';
import Card from 'components/Card';
import { getBooks, patchBooks } from 'services/books';
import { insertFavorites } from 'services/favorites';
import { useMemo } from 'react';
import OpenCard from 'components/OpenCard';
import ButtonVoice from 'components/ButtonVoice';
import { randomPhrases } from './dates';

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

  async function clickFavorite(key, favoriteBoolean) {
    patchBooks(key, true);
    await insertFavorites(key);
    fetchBooks();
    console.log('Favoritado');
  }

  function clickOpenBook(e) {
    setClickOpen(!clickOpen);
    document.body.style.overflow = !clickOpen ? 'hidden' : '';
    setDataBookOpen(e.children);
  }

  function returnVoice(text) {
    setSearchValue(text);
  }

  return (
    <>
      <S.SearchStyled clicktrue={clickOpen}>
        <S.TitleStyled>{randomPhrases()}</S.TitleStyled>
        <S.InputSpanStyled>
          <Input
            placeholder="Escreva sua próxima leitura"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <ButtonVoice returnVoice={returnVoice}></ButtonVoice>
        </S.InputSpanStyled>
        <S.ShowcaseBookStyled>
          {filteredBooks.length >= 1 ? (
            filteredBooks.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.name}
                  imageUrl={item.src}
                  clickFavorite={clickFavorite}
                  id={item.id}
                  favorite={item.favorite}
                  clickOpenBook={clickOpenBook}
                  desc={item.describe}
                  category={item.category}
                />
              );
            })
          ) : (
            <div>
              <S.TitleStyled>Livro procurado não foi encontrado</S.TitleStyled>
              <S.ButtonStyled onClick={() => setSearchValue('')}>
                Voltar
              </S.ButtonStyled>
            </div>
          )}
        </S.ShowcaseBookStyled>
      </S.SearchStyled>
      {clickOpen && (
        <OpenCard
          dataBookOpen={dataBookOpen}
          clickOpen={clickOpen}
          setClickOpen={setClickOpen}
        />
      )}
    </>
  );
}

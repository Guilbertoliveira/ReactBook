import { Input } from 'components/Input';
import {
  SearchStyled,
  SubTitleStyled,
  TitleStyled,
  ShowcaseBookStyled,
} from './styles';
import { useEffect, useState } from 'react';
import Card from 'components/Card';
import { getBooks, patchBooks } from 'services/books';
import { insertFavorites } from 'services/favorites';
import { useMemo } from 'react';

export default function Search() {
  const [book, setBook] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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

  return (
    <SearchStyled>
      <TitleStyled>Ja sabe por onde começar?</TitleStyled>
      <SubTitleStyled>Encontre seu livro em nossa estante</SubTitleStyled>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <ShowcaseBookStyled>
        {filteredBooks.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.name}
              imageUrl={item.src}
              clickBook={clickBook}
              id={item.id}
              favorite={item.favorite}
            />
          );
        })}
      </ShowcaseBookStyled>
    </SearchStyled>
  );
}

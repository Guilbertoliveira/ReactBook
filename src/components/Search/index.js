import { Input } from 'components/Input';
import {
  SearchStyled,
  SubTitleStyled,
  TitleStyled,
  ShowcaseBookStyled,
} from './styles';
import { useEffect, useState } from 'react';
import Card from 'components/Card';
import { getBooks } from 'services/books';
import { insertFavorites } from 'services/favorites';

export default function Search() {
  const [book, setBook] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([]);


  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchBooks() {
    const booksAPI = await getBooks()
    setBook(booksAPI)
  }


  function filterBook(escrita) {
    console.log(book.filter((e) => e.name.includes(escrita)));
    setFilteredBooks(
      book.filter((e) => e.name.toLowerCase().includes(escrita.toLowerCase()))
    );
  }


  async function clickBook(key) {
    console.log('adicionar')
    console.log(key)
    insertFavorites(key)
  }


  return (
    <SearchStyled>
      <TitleStyled>Ja sabe por onde começar?</TitleStyled>
      <SubTitleStyled>Encontre seu livro em nossa estante</SubTitleStyled>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(event) => {
          filterBook(event.target.value);
        }}
      />
      <ShowcaseBookStyled >
        {filteredBooks.map((item) => {
          return <Card key={item.id} title={item.name} imageUrl={item.src} clickBook={clickBook} id={item.id} />;
        })}
      </ShowcaseBookStyled>
    </SearchStyled>
  );
}

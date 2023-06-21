import { Input } from 'components/Input';
import {
  SearchStyled,
  SubTitleStyled,
  TitleStyled,
  ShowcaseBookStyled,
} from './styles';
import { useState } from 'react';
import { book } from './dates';
import Card from 'components/Card';

export default function Search() {
  const [filteredBooks, setFilteredBooks] = useState(book);

  function filterBook(escrita) {
    console.log(book.filter((e) => e.name.includes(escrita)));
    setFilteredBooks(
      book.filter((e) => e.name.toLowerCase().includes(escrita.toLowerCase()))
    );
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
      <ShowcaseBookStyled>
        {filteredBooks.map((item) => {
          return (
            <Card key={item.id} title={item.name} imageUrl={item.src} />
          );
        })}
      </ShowcaseBookStyled>
    </SearchStyled>
  );
}

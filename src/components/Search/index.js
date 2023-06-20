import { Input } from 'components/Input';
import {
  SearchStyled,
  SubTitleStyled,
  TitleStyled,
  ShowcaseBookStyled,
} from './styles';
import { useState } from 'react';
import { book } from './dates';

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
            <section key={item.id}>
              <h1>{item.name}</h1>
              <h2>{item.id}</h2>
              <img src={item.src} alt={`imagem do livro ${item.name}`}></img>
            </section>
          );
        })}
      </ShowcaseBookStyled>
    </SearchStyled>
  );
}

import Releases from 'components/Releases';
import Section from 'components/Section';
import { DivStyled, UlStyled, DivStyledCard, TitleStyled } from './styles';
import { getBooks } from 'services/books';
import { useEffect, useState } from 'react';
import Card from 'components/Card';



export default function Categories() {

  const bookCategory = ['Drama', 'Ficção', 'Romance', 'Comedia', 'Horror', 'Ficção Científica', 'Ficção Distópica', 'Ação', 'Fantasia', 'Distopia', 'Infantil', 'Aventura', 'Mistério', 'Autoajuda', 'Suspense', 'Terror']
  const [books, setBooks] = useState([])
  const [filter, setFilter] = useState([])



  const filterBooksByCategory = (category) => {
    return books.filter((book) => book.category === category);
  };


  bookCategory.sort((livro1, livro2) => livro1.localeCompare(livro2));

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBooks(booksAPI);
  }


  useEffect(() => {
    fetchBooks()
  }, [])



  return (
    <>
      <Section>
        <DivStyled>
          {bookCategory.map((category) => (
            <DivStyledCard>
              <TitleStyled> {category}</TitleStyled>
              <UlStyled>
                {filterBooksByCategory(category).map((book) => {
                  return <Card title={book.name} imageUrl={book.src}></Card>
                })}
              </UlStyled>
            </DivStyledCard>
          ))}
        </DivStyled>
      </Section >
      <Releases></Releases>
    </>
  );
}

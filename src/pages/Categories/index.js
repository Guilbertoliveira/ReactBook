import Releases from 'components/Releases';
import Section from 'components/Section';
import { DivStyled, UlStyled, DivStyledCard, TitleStyled } from './styles';
import { getBooks } from 'services/books';
import { useEffect, useState } from 'react';
import Card from 'components/Card';
import Slider from 'commons/Slider';
import { SwiperSlide } from 'swiper/react';
import OpenCard from 'components/OpenCard';
import { SkeletonCard } from 'components/SkeletonCard';

export default function Categories() {
  const bookCategory = [
    'Drama',
    'Ficção',
    'Romance',
    'Comédia',
    'Horror',
    'Ficção Científica',
    'Ficção Distópica',
    'Ação',
    'Fantasia',
    'Distopia',
    'Infantil',
    'Aventura',
    'Mistério',
    'Autoajuda',
    'Suspense',
    'Terror',
  ];
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState([]);
  const [clickOpen, setClickOpen] = useState(false);
  const [dataBookOpen, setDataBookOpen] = useState([]);

  function clickOpenBook(e) {
    setClickOpen(!clickOpen);
    document.body.style.overflow = !clickOpen ? 'hidden' : '';
    setDataBookOpen(e.children);
  }

  const settings = {
    spaceBetween: 10,
    slidesPerView: 'auto',
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  const filterBooksByCategory = (category) => {
    return books.filter((book) => book.category === category);
  };

  bookCategory.sort((livro1, livro2) => livro1.localeCompare(livro2));

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBooks(booksAPI);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Section clicktrue={clickOpen}>
        <DivStyled>
          {bookCategory.map((category) => (
            <DivStyledCard>
              <TitleStyled> {category}</TitleStyled>
              <UlStyled>
                {filterBooksByCategory(category).length === 0 ? (
                  <>
                    <h3>Livro desse genero não encontrado</h3>

                  </>
                ) : filterBooksByCategory(category).length <= 5 ? (
                  filterBooksByCategory(category).map((book) => {
                    return (
                      <Card
                        title={book.name}
                        imageUrl={book.src}
                        id={book.id}
                        desc={book.describe}
                        category={book.category}
                        clickOpenBook={clickOpenBook}
                      ></Card>
                    );
                  })
                ) : (
                  <Slider settings={settings}>
                    {filterBooksByCategory(category).map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <Card
                            key={item.id}
                            title={item.name}
                            imageUrl={item.src}
                            favorite={item.favorite}
                            id={item.id}
                            clickBookFavorite={false}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Slider>
                )}
              </UlStyled>
            </DivStyledCard>
          ))}
        </DivStyled>
      </Section>
      <Releases></Releases>
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

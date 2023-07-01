import Section from 'components/Section';
import Card from 'components/Card';
import RecomCard from 'components/RecomCard';
import recomImage from 'img/livro2.png';
import Slider from 'commons/Slider';
import { SwiperSlide } from 'swiper/react';
import { getBooks } from 'services/books';
import { useEffect, useState } from 'react';

export default function Releases() {
  const [book, setBook] = useState([]);

  const settings = {
    spaceBetween: 10,
    slidesPerView: 6,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const booksAPI = await getBooks();
    setBook(booksAPI);
  }

  return (
    <Section
      title={'Lançamentos'}
      fontColor={'white'}
      backgroundColor={'rgb(0, 47, 90)'}
    >
      <Slider settings={settings}>
        {book.map((item) => {
          return (
            <SwiperSlide>
              <Card
                key={item.id}
                title={item.name}
                imageUrl={item.src}
                favorite={item.favorite}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Slider>

      <RecomCard
        title="Talvez você se interesse por"
        subTitle="Angular 11"
        describe="Construindo uma aplicação com a plataforma Google"
        url={recomImage}
      />
    </Section>
  );
}

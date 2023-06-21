import Section from 'components/Section';
import { books } from './dates';
import { ReleaseSectionStyled } from './style';
import Card from 'components/Card';

export default function Releases() {
  return (
    <Section
      title={'lançamentos'}
      fontColor={'white'}
      backgroundColor={'#177485'}
    >
      <ReleaseSectionStyled>
        {books.map((item) => {
          return (
            <Card key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.src} alt={`imagem do livro ${item.name}`}></img>
            </Card>
          );
        })}
      </ReleaseSectionStyled>
    </Section>
  );
}

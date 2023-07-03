import Card from 'components/Card';
import { OpenCardStyled } from './styles';

export default function OpenCard() {
  return (
    <OpenCardStyled>
      <Card
        id={'1'}
        imageUrl={
          'https://edit.org/photos/img/blog/zz7-flyer-personalizavel-para-capas-de-livros.jpg-840.jpg'
        }
        title={'teste'}
      ></Card>
      <p>descrição aleatoria inserida blablablabla</p>
    </OpenCardStyled>
  );
}

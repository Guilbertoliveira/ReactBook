import { CardStyled, ImgStyled } from './styles';

export default function Card({ title, imageUrl, clickBook, id }) {



  return (
    <CardStyled>
      <h1>{title}</h1>
      <ImgStyled src={imageUrl} alt={`imagem do livro ${imageUrl}`} onClick={() => clickBook(id)}></ImgStyled>
    </CardStyled>
  );
}

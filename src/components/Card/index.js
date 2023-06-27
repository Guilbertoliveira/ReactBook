import { CardStyled, ImgStyled } from './styles';

export default function Card({ title, imageUrl }) {
  return (
    <CardStyled>
      <h1>{title}</h1>
      <ImgStyled src={imageUrl} alt={`imagem do livro ${imageUrl}`}></ImgStyled>
    </CardStyled>
  );
}

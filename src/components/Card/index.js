import { CardStyled, ImgStyled, DivFavoriteStyled } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Card({ title, imageUrl, clickBook, id, favorite }) {
  return (
    <CardStyled>
      <DivFavoriteStyled>
        {favorite ? (
          <AiFillStar
            title="desfavoritar"
            style={{ fontSize: 26, color: 'yellow' }}
          ></AiFillStar>
        ) : (
          <AiOutlineStar
            title="favoritar"
            style={{ fontSize: 26, color: 'yellow' }}
          ></AiOutlineStar>
        )}
      </DivFavoriteStyled>
      <h1>{title}</h1>
      <ImgStyled
        src={imageUrl}
        alt={`imagem do livro ${imageUrl}`}
        onClick={() => clickBook(id, favorite)}
      ></ImgStyled>
    </CardStyled>
  );
}

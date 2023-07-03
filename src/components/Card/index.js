import { CardStyled, ImgStyled, DivFavoriteStyled } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Card({
  title,
  imageUrl,
  clickBook,
  id,
  favorite,
  clickBookFavorite,
}) {
  return (
    <>
      <CardStyled>
        <DivFavoriteStyled>
          {favorite ? (
            <AiFillStar
              title="desfavoritar"
              style={{ fontSize: 26, color: 'yellow' }}
              onClick={() => clickBook(id, favorite)}
            ></AiFillStar>
          ) : (
            <AiOutlineStar
              title="favoritar"
              style={{ fontSize: 26, color: 'yellow' }}
              onClick={() => clickBook(id, favorite)}
            ></AiOutlineStar>
          )}
        </DivFavoriteStyled>

        <div onClick={() => clickBookFavorite()}>
          <h1>{title}</h1>
          <ImgStyled
            src={imageUrl}
            alt={`imagem do livro ${imageUrl}`}
          ></ImgStyled>
        </div>
      </CardStyled>
    </>
  );
}

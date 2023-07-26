import { CardStyled, ImgStyled, DivFavoriteStyled, PStyled } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Card({
  title,
  imageUrl,
  clickBook,
  id,
  favorite,
  clickBookFavorite,
  desc,
}) {
  function teste(e) {
    if (clickBookFavorite) {
      return clickBookFavorite(e);
    }

    console.log('nao disponivel');
  }

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

        <div>
          <h1>{title}</h1>
          <ImgStyled
            onClick={(event) => teste(event.target.parentNode)}
            src={imageUrl}
            alt={`imagem do livro ${imageUrl}`}
          ></ImgStyled>
          <PStyled>{desc}</PStyled>
        </div>
      </CardStyled>
    </>
  );
}

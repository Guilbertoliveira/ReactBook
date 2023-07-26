import { CardStyled, ImgStyled, DivFavoriteStyled, PStyled } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Card({
  title,
  imageUrl,
  clickFavorite,
  id,
  favorite,
  clickOpenBook,
  desc,
}) {
  function test(e) {
    if (clickOpenBook) {
      return clickOpenBook(e);
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
              onClick={() => clickFavorite(id, favorite)}
            ></AiFillStar>
          ) : (
            <AiOutlineStar
              title="favoritar"
              style={{ fontSize: 26, color: 'yellow' }}
              onClick={() => clickFavorite(id, favorite)}
            ></AiOutlineStar>
          )}
        </DivFavoriteStyled>

        <div>
          <h1>{title}</h1>
          <ImgStyled
            onClick={(event) => test(event.target.parentNode)}
            src={imageUrl}
            alt={`imagem do livro ${imageUrl}`}
          ></ImgStyled>
          <PStyled>{desc}</PStyled>
        </div>
      </CardStyled>
    </>
  );
}

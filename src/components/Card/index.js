import { CardStyled, ImgStyled, DivFavoriteStyled, PStyled, TitleStyled } from './styles';
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
          <TitleStyled title={title}>{title}</TitleStyled>
        </DivFavoriteStyled>

        <div>
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

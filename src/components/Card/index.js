import { CardStyled, ImgStyled, DivFavoriteStyled, PStyled, TitleStyled, CategoryStyled } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Tooltip as ReactTooltip } from 'react-tooltip'



export default function Card({
  title,
  imageUrl,
  clickFavorite,
  id,
  favorite,
  clickOpenBook,
  desc,
  category
}) {
  function test(e) {
    if (clickOpenBook) {
      return clickOpenBook(e);
    }

    console.log('nao disponivel');
  }


  return (
    <>
      <CardStyled data-tooltip-id={`my-tooltip-${id}`}>
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
          <TitleStyled >{title}</TitleStyled>

        </DivFavoriteStyled>

        <div>
          <ImgStyled
            onClick={(event) => test(event.target.parentNode)}
            src={imageUrl}
            alt={`imagem do livro ${imageUrl}`}
          ></ImgStyled>
          <PStyled title={title}>{desc}</PStyled>
          <CategoryStyled>{category}</CategoryStyled>
        </div>
      </CardStyled>
      <ReactTooltip
        id={`my-tooltip-${id}`}
        place="top"
        content={title}
        variant="info"

      />
    </>
  );
}

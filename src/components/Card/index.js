import {
  CardStyled,
  ImgStyled,
  DivFavoriteStyled,
  PStyled,
  TitleStyled,
  CategoryStyled,
} from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function Card({
  title,
  imageUrl,
  clickFavorite,
  id,
  favorite,
  clickOpenBook,
  desc,
  category,
}) {
  function validationClick(e) {
    if (clickOpenBook) {
      return clickOpenBook(e);
    }
    alert('não disponivel no momento');
  }

  return (
    <>
      <CardStyled data-tooltip-id={`my-tooltip-${id}`}>
        <DivFavoriteStyled>
          {favorite ? (
            <AiFillStar
              style={{ fontSize: 26, color: 'yellow' }}
              onClick={() => clickFavorite(id, favorite)}
              data-tooltip-id={`desfavoritar-${id}`}
            ></AiFillStar>
          ) : (
            <AiOutlineStar
              style={{ fontSize: 26, color: 'yellow' }}
              onClick={() => clickFavorite(id, favorite)}
              data-tooltip-id={`favoritar-${id}`}
            ></AiOutlineStar>
          )}
          <TitleStyled>{title}</TitleStyled>
        </DivFavoriteStyled>

        <div>
          <ImgStyled
            onClick={(event) => validationClick(event.target.parentNode)}
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
        variant="warning"
      />
      <ReactTooltip
        id={`desfavoritar-${id}`}
        place="top"
        content="favoritado"
        variant="success"
      />
      <ReactTooltip
        id={`favoritar-${id}`}
        place="top"
        content="favoritar"
        variant="dark"
      />
    </>
  );
}

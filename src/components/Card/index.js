import { CardStyled, ImgStyled, DivFavoriteStyled } from './styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function Card({ title, imageUrl, clickBook, id, favorite }) {

  console.log(favorite)

  return (
    <CardStyled>
      <DivFavoriteStyled>
        {favorite
          ? <AiFillStar style={{ fontSize: 26, color: 'yellow' }}></AiFillStar>
          : <AiOutlineStar style={{ fontSize: 26, color: 'yellow' }} ></AiOutlineStar>}
      </DivFavoriteStyled>
      <h1>{title}</h1>
      <ImgStyled src={imageUrl} alt={`imagem do livro ${imageUrl}`} onClick={() => clickBook(id)}></ImgStyled>
    </CardStyled>
  );
}

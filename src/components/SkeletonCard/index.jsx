import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import * as S from './styles';

export function SkeletonCard() {
  return (
    <S.CardStyled>
      <S.DivFavoriteStyled>
        {
          <AiFillStar
            title="desfavoritar"
            style={{ fontSize: 26, color: 'rgba(221, 221, 223, 0.3)' }}
          ></AiFillStar>
        }
        <S.TitleStyled></S.TitleStyled>
      </S.DivFavoriteStyled>

      <div>
        <S.ImgStyled src=""></S.ImgStyled>
        <S.PStyled>teste</S.PStyled>
        <S.CategoryStyled>teste</S.CategoryStyled>
      </div>
    </S.CardStyled>
  );
}

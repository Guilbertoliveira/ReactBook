import * as S from './styles';

export default function RecomCard({ title, subTitle, describe, url }) {
  return (
    <S.CardRecomStyled>
      <S.ContainerFirstStyled>
        <S.TitleStyled>{title}</S.TitleStyled>
        <h4>{subTitle}</h4>
        <p>{describe}</p>
      </S.ContainerFirstStyled>
      <S.ContainerSecundStyled>
        <S.ImgStyled
          src={url}
          alt={`Imagem de um livro relacionado ao ${subTitle}`}
        />
        <S.BtnStyled>Saiba mais</S.BtnStyled>
      </S.ContainerSecundStyled>
    </S.CardRecomStyled>
  );
}

import * as S from './styles';

export default function Footer() {
  return (
    <S.FooterStyled>
      <p>Projeto feito por Guilbert</p>
      <p>Esse projeto faz parte do projeto fullstack feito por mim</p>
      <S.FooterLinkStyled href="https://github.com/Guilbertoliveira/ReactBook">
        Github
      </S.FooterLinkStyled>
    </S.FooterStyled>
  );
}

import { FooterStyled, FooterLinkStyled } from './styles';

export default function Footer() {
  return (
    <FooterStyled>
      <p>Projeto feito por Guilbert</p>
      <p>Esse projeto faz parte do projeto fullstack feito por mim</p>
      <FooterLinkStyled href="https://github.com/Guilbertoliveira/ReactBook">
        Github
      </FooterLinkStyled>
    </FooterStyled>
  );
}

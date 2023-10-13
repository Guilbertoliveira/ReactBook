import Section from 'components/Section';
import imgErro from 'img/erro404.png';
import { ImgStyled } from './styles.js';

export default function PageError() {
  return (
    <Section title="Pagina não existe, verifique se a url está certa !">
      <ImgStyled src={imgErro}></ImgStyled>
    </Section>
  );
}

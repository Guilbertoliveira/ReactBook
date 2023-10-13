import { useEffect } from 'react';
import * as S from './styles';
import { useState } from 'react';

export default function OpenCard({ dataBookOpen, clickOpen, setClickOpen }) {
  let [bookOpen, setBookOpen] = useState('');
  let [openModel, setOpenModel] = useState(true);

  useEffect(() => {
    setBookOpen({
      name: dataBookOpen[1].title,
      url: dataBookOpen[0].src,
      alt: dataBookOpen[0].alt,
      desc: dataBookOpen[1].textContent,
      category: dataBookOpen[2].textContent,
    });
  }, []);

  function clickOpenBook() {
    setClickOpen(!clickOpen);
    document.body.style.overflow = !clickOpen ? 'hidden' : '';
  }

  return (
    <S.OpenCardStyled>
      <S.ButtonStyled onClick={clickOpenBook}>Fechar</S.ButtonStyled>
      <S.CardStyled>
        <S.ImgCardStyled src={bookOpen.url} alt={bookOpen.alt}></S.ImgCardStyled>

        <S.DivDescribeStyled>
          <S.TitleStyled>{bookOpen.name}</S.TitleStyled>
          <S.PStyled>{bookOpen.desc}</S.PStyled>
          <S.SpanStyled>
            <S.PCategoryStyled>{bookOpen.category}</S.PCategoryStyled>
          </S.SpanStyled>
        </S.DivDescribeStyled>
      </S.CardStyled>
    </S.OpenCardStyled>
  );
}

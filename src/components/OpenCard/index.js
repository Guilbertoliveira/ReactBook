import { useEffect } from 'react';
import {
  OpenCardStyled,
  CardStyled,
  ImgCardStyled,
  DivDescribeStyled,
  TitleStyled,
  PStyled,
  PCategoryStyled,
  SpanStyled,
  ButtonStyled,
} from './styles';
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
    <OpenCardStyled>
      <ButtonStyled onClick={clickOpenBook}>Fechar</ButtonStyled>
      <CardStyled>
        <ImgCardStyled src={bookOpen.url} alt={bookOpen.alt}></ImgCardStyled>

        <DivDescribeStyled>
          <TitleStyled>{bookOpen.name}</TitleStyled>
          <PStyled>{bookOpen.desc}</PStyled>
          <SpanStyled>
            <PCategoryStyled>{bookOpen.category}</PCategoryStyled>
          </SpanStyled>
        </DivDescribeStyled>
      </CardStyled>
    </OpenCardStyled>
  );
}

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
} from './styles';
import { useState } from 'react';

export default function OpenCard(props) {
  let [bookOpen, setBookOpen] = useState('');
  let [openModel, setOpenModel] = useState(true);

  useEffect(() => {
    console.log(props.bookOpen)
    setBookOpen({
      name: props.bookOpen[1].title,
      url: props.bookOpen[0].src,
      alt: props.bookOpen[0].alt,
      desc: props.bookOpen[1].textContent,
    });
  }, []);

  return (
    <OpenCardStyled>
      <CardStyled>
        <ImgCardStyled src={bookOpen.url} alt={bookOpen.alt}></ImgCardStyled>

        <DivDescribeStyled>
          <TitleStyled>{bookOpen.name}</TitleStyled>
          <PStyled>{bookOpen.desc}</PStyled>
          <SpanStyled>
            <PCategoryStyled>+18</PCategoryStyled>
            <PCategoryStyled>Drama</PCategoryStyled>
          </SpanStyled>
        </DivDescribeStyled>
      </CardStyled>
    </OpenCardStyled>
  );
}

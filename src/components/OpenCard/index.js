import { useEffect } from 'react';
import {
  OpenCardStyled,
  CardStyled,
  ImgCardStyled,
  DivDescribeStyled,
  TitleStyled,
  PStyled,
} from './styles';
import { useState } from 'react';

export default function OpenCard(props) {
  let [bookOpen, setBookOpen] = useState('');
  let [openModel, setOpenModel] = useState(true);

  useEffect(() => {
    setBookOpen({
      name: props.bookOpen[0].textContent,
      url: props.bookOpen[1].src,
      alt: props.bookOpen[1].alt,
    });
  }, []);

  return (
    <OpenCardStyled>
      <CardStyled>
        <ImgCardStyled src={bookOpen.url} alt={bookOpen.alt}></ImgCardStyled>

        <DivDescribeStyled>
          <TitleStyled>{bookOpen.name}</TitleStyled>
          <PStyled>
            descrição aleatoria inserida blablablabla
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
          </PStyled>
        </DivDescribeStyled>
      </CardStyled>
    </OpenCardStyled>
  );
}

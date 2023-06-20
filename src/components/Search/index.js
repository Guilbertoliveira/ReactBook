import { Input } from 'components/Input';
import { SearchStyled, SubTitleStyled, TitleStyled } from './styles';
import { useState } from 'react';

export default function Search() {
  const [typedText, setTypedText] = useState([]);

  return (
    <SearchStyled>
      <TitleStyled>Ja sabe por onde começar?</TitleStyled>
      <SubTitleStyled>Encontre seu livro em nossa estante</SubTitleStyled>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={(event) => {
          setTypedText(event.target.value);
        }}
      />
      <h1>{typedText}</h1>
    </SearchStyled>
  );
}

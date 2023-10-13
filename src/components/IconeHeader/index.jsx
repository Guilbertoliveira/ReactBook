import perfil from 'img/perfil.svg';
import sacola from 'img/sacola.svg';
import * as S from './styles';

export default function IconeHeader() {
  const icones = [perfil, sacola];

  return (
    <S.ListIcon>
      {icones.map((item) => (
        <li>
          <img src={item} alt="icones usuarios"></img>
        </li>
      ))}
    </S.ListIcon>
  );
}

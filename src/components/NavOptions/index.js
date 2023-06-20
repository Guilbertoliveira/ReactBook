import { NavStyled, ListStyled, LiStyled } from './styles';

export default function NavOptions() {
  const textOptions = ['Categorias', 'Favoritos', 'Minha estante'];

  return (
    <NavStyled>
      <ListStyled>
        {textOptions.map((text) => (
          <LiStyled>
            <p>{text}</p>
          </LiStyled>
        ))}
      </ListStyled>
    </NavStyled>
  );
}

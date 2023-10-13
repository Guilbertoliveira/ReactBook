import { Outlet } from 'react-router-dom';
import * as S from './styles'

export default function ThemeLogin() {
    return (
        <S.SectionStyled>

            <Outlet />

        </S.SectionStyled>
    );
}

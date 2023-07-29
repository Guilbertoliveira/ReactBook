import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import {
    CardStyled,
    ImgStyled,
    DivFavoriteStyled,
    PStyled,
    TitleStyled,
    CategoryStyled,
} from './styles';

export function SkeletonCard() {

    return (
        <>
            <CardStyled>
                <DivFavoriteStyled>
                    {(
                        <AiFillStar
                            title="desfavoritar"
                            style={{ fontSize: 26, color: 'yellow' }}
                        ></AiFillStar>
                    )}
                    <TitleStyled></TitleStyled>
                </DivFavoriteStyled>

                <div>
                    <ImgStyled src=''></ImgStyled>
                    <PStyled>teste</PStyled>
                    <CategoryStyled>teste</CategoryStyled>
                </div>
            </CardStyled>
        </>
    )
}

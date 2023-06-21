import { CardRecomStyled, ImgStyled, ContainerFirstStyled, ContainerSecundStyled, TitleStyled, BtnStyled } from './styles';

export default function RecomCard({ title, subTitle, describe, url }) {
    return (
        <CardRecomStyled>
            <ContainerFirstStyled>
                <TitleStyled>{title}</TitleStyled>
                <h4>{subTitle}</h4>
                <p>{describe}</p>
            </ContainerFirstStyled>
            <ContainerSecundStyled>
                <ImgStyled src={url} alt={`Imagem de um livro relacionado ao ${subTitle}`} />
                <BtnStyled>Saiba mais</BtnStyled>
            </ContainerSecundStyled>
        </CardRecomStyled>
    )
}
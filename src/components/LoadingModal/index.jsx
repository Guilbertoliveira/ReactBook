import Section from "components/Section"
import * as S from "./styles"

export default function LoadingModal() {
    return (
        <S.LoadingStyled>
            <Section subtitle={false}>
                <S.LoadingAnimation></S.LoadingAnimation>
                <h2>Loading ...</h2>
                Atualizando Aguarda ai ansioso! xD
            </Section>

        </S.LoadingStyled>
    )
}
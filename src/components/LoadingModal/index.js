import Section from "components/Section"
import { LoadingStyled, LoadingAnimation } from "./styles"

export default function LoadingModal() {
    return (
        <LoadingStyled>
            <Section subtitle={false}>
                <LoadingAnimation></LoadingAnimation>
                <h2>Loading ...</h2>
                Atualizando Aguarda ai ansioso! xD
            </Section>

        </LoadingStyled>
    )
}
import { FormStyled, SectionStyled, EmailStyled, PasswordStyled, ButtonStyled } from "./styles"

export default function Login() {
    return (
        <SectionStyled>
            <FormStyled>
                <EmailStyled>
                    <label>Login</label>
                    <input type="email"></input>
                </EmailStyled>
                <PasswordStyled>
                    <label>Senha</label>
                    <input type="password"></input>
                </PasswordStyled>
                <ButtonStyled>Entrar</ButtonStyled>
            </FormStyled>
        </SectionStyled>
    )
}
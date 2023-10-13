import { Link } from "react-router-dom";
import * as S from "./styles"
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ email, password });
        setEmail('');
        setPassword('');
    }
    return (
        <S.FormStyled onSubmit={handleSubmit}>
            <S.EmailStyled>
                <label>Novo Login</label>
                <input

                ></input>
            </S.EmailStyled>
            <S.PasswordStyled>
                <label>Nova Senha</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </S.PasswordStyled>
            <S.ButtonStyled>Entrar</S.ButtonStyled>
            <Link to='/login' style={{ color: 'white' }}>Já possui uma conta ?</Link>
        </S.FormStyled>

    )
}
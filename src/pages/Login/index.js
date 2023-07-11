import { useState } from 'react';
import {
    FormStyled,
    SectionStyled,
    EmailStyled,
    PasswordStyled,
    ButtonStyled,
} from './styles';
import { useContext } from 'react';
import { AuthContext } from 'context/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authenticated, login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ email, password });
        login(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <SectionStyled>
            <FormStyled onSubmit={handleSubmit}>
                <EmailStyled>
                    <label>Login</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </EmailStyled>
                <PasswordStyled>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </PasswordStyled>
                <ButtonStyled>Entrar</ButtonStyled>
            </FormStyled>
        </SectionStyled>
    );
}

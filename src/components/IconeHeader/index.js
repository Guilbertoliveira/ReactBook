import perfil from 'img/perfil.svg';
import sacola from 'img/sacola.svg';
import { ListIcon } from './styles';

export default function IconeHeader() {
    const icones = [perfil, sacola];

    return (
        <ListIcon>
            {icones.map((item) => (
                <li>
                    <img src={item} alt="icones usuarios"></img>
                </li>
            ))}
        </ListIcon>
    );
}

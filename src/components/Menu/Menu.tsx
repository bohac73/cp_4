import { Link } from "react-router-dom";
import { StyledMenu } from "./Menu.style";
import { BiHomeAlt } from "react-icons/bi";
import { TbFilePlus } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export const Menu = () => {
    return <StyledMenu>
        <ul>
            <li>
                <BiHomeAlt size="1.5rem" color="#032cfc" />
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <TbFilePlus size="1.5rem" color="#032cfc" />
                <Link to="/NovaLista">Nova Lista</Link>
            </li>
            <li>
                <CgProfile size="1.5rem" color="#032cfc" />
                <Link to="/Perfil">Perfil</Link>
            </li>
        </ul>
    </StyledMenu>

}
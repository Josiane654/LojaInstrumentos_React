import Style from "../css/Header.module.css"
import {Link} from 'react-router-dom'

function Header(){

    return(
        <header className={Style.Header}>
            <nav className={Style.menu}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"quem-somos"}>Quem Somos</Link></li>
                    <li><Link to={"Instrumentos"}>Instrumentos</Link></li>
                    <li><Link to={"Endereco"}>Endereço</Link></li>
                    <li><Link to={"Contato"}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
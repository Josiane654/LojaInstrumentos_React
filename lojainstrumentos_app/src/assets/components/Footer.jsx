import Style from "../css/Footer.module.css"
import whats from '../imagess/images/whats.png'
import insta from '../imagess/images/insta.png'
import face from '../imagess/images/face.png'

function Footer() {

    return (
        <footer className={Style.footer}>
            <div className={Style.texto}>
                <h6 className={Style.titulo}>Nossa Loja - Instrumentos Musicais</h6>

                <p className={Style.endereco}>Rua Tito, 54 - Lapa</p>
                <p className={Style.endereco}>São Paulo - Brasil</p>
            </div>

            <div className={Style.redes}>
                <img className={Style.whats} src={whats} alt="" />
                <img className={Style.insta} src={insta} alt="" />
                <img className={Style.face} src={face} alt="" />
            </div>
        </footer>
    )
}

export default Footer
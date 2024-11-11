import Style from "../css/Contato.module.css"
import whats from '../imagess/images/whats.png'
import insta from '../imagess/images/insta.png'
import face from '../imagess/images/face.png'

function Contato(){

    return(
        <div className={Style.container}>
            <section className={Style.forms}>
                <form action="">
                    <label for="name">Entre com o seu nome:</label>
                    <br />
                    <input className={Style.name} type="text" /> <br /><br />

                    <label for="email">Entre com o seu e-mail:</label>
                    <br />
                    <input className={Style.email} type="email" /> <br /><br />

                    <label for="name">Faça seu pedido:</label>
                    <br />
                    <input className={Style.pedido} type="text" /> <br /><br />

                    <input className={Style.botao} type="submit" value="Enviar"></input>
                </form>
            </section>

            <section className={Style.redes}>
                <h1 className={Style.titulo}>Acesse nossas redes sociais:</h1>

                <br /><br />

                <div className={Style.logoredes}>
                    <img className={Style.whats} src={whats} alt="" />
                    <img className={Style.insta} src={insta} alt="" />
                    <img className={Style.face} src={face} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Contato
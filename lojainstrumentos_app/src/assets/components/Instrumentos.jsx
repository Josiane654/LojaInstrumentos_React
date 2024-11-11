import Style from "../css/Instrumentos.module.css"
import ComponenteProps from "./ComponenteProps"
import violao from '../imagess/images/guitarrinha.jpg'
import teclado from '../imagess/images/teclado.webp'
import bateria from '../imagess/images/bateria2.webp'
import cajon from '../imagess/images/cajon.webp'

function Instrumentos(){

    return(
        <div className={Style.container}>
            <ComponenteProps 
            instrumento={violao}
            produto="VIOLÃO YAHAMA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"
            valor="R$ 989,50"
            />
            <ComponenteProps 
            instrumento={teclado}
            produto="TECLADO PORTÁTIL YAMAHA PSR-E283 PARA INICIANTES PRETO COM SUPORTE"
            valor="R$ 1.049,00"
            />
            <ComponenteProps 
            instrumento={bateria}
            produto="BATERIA ACÚSTICA COMPLETA COM PRATOS BANCO PEDAL BUMBO 20 22 WINE RED"
            valor="R$ 2.405,40"
            />
            <ComponenteProps 
            instrumento={cajon}
            produto="CAJON (CARRON) LISO ACÚSTICO PERCUSSIONLINE +PAR VASSOURINHA COR PRETO"
            valor="R$ 267,90"
            />
        </div>
    )
}

export default Instrumentos
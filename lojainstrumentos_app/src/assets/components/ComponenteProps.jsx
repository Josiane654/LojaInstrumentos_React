import Style from '../css/ComponenteProps.module.css'

function ComponenteProps({ instrumento, produto, valor }) {
    return (
        <div className={Style.caixa_props}>
            <img src={instrumento} alt="" />
            <div className={Style.textos}>
                <p className={Style.descricao}>{produto}</p>
                <p className={Style.preco}>{valor}</p>
            </div>
        </div>
    )
}

export default ComponenteProps
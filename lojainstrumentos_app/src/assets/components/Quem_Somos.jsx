import Style from "../css/Quem_Somos.module.css"

function Quem_Somos(){

    return(
        <div className={Style.container}>
            <section className={Style.texto}>
                <h1 className={Style.titulo}>Nossa Loja - Instrumentos Musicais</h1>

                <p className={Style.textoloja}>Se você é um amante de música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja, você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>
            </section>

            <section className={Style.img}></section>
        </div>
    )
}

export default Quem_Somos
import Style from "../css/Endereco.module.css"

function Endereco() {

    return (
        <div className={Style.container}>
            <section className={Style.maps}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122707501157!2d-46.69668632003369!3d-23.52808860574536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef875057678ff%3A0xec699445ec10601a!2sR.%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005051-000!5e0!3m2!1spt-BR!2sbr!4v1723817612405!5m2!1spt-BR!2sbr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <section className={Style.textos}>
                <h1 className={Style.titulo}>Nossa Loja - Instrumentos Musicais</h1>

                <p className={Style.texto}>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cecília Becker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de insrumentos, em um ambiente agradável para toda a família!</p>
            </section>
        </div>
    )
}

export default Endereco
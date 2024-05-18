import Short from "../molecules/short";

const Shorts = () => {

    const linksShorts = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeaUDMB_I1TRZ6IXb-5SIr8yHxYcG0RY5bHWjFTxplg&s"
    ];

    const titulos = [
        "Samsung Galaxy S24 Ultra | Prueba de carga"
    ];

    const informaciones = [
        "237 M de vistas"
    ];

    return (
        <div className="seccionVideo">
            <h2>Shorts</h2>
            <div className="shorts">
                <ul>
                    <li>
                        <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>
                    </li>
                    <li>
                        <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>
                    </li>
                    <li>
                        <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>
                    </li>
                    <li>
                        <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>
                    </li>
                    <li>
                        <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>
                    </li>                    
                </ul>
            </div>
        </div>
    );
}

export default Shorts;
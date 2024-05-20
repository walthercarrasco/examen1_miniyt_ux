import Short from "../molecules/short";

const Shorts = () => {

    const linksShorts = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeaUDMB_I1TRZ6IXb-5SIr8yHxYcG0RY5bHWjFTxplg&s",
        "https://i.ytimg.com/vi/jmani2Nv3PU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDscT_0wzZazdxxO1iz4zbCRdOW4w",
        "https://i.ytimg.com/vi/6il8uLQ0PBE/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBJfPjw5Cyw_qADWrCCmbhnIcGPnA",
        "https://i.ytimg.com/vi/pEX9dfbCjm0/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLDK5Y9sylzthWag5Hk7tpItnYfu5w"
    ];

    const titulos = [
        "Samsung Galaxy S24 Ultra | Prueba de carga",
        "Anya está enojada por qué se quedó dormida",
        "TWICE「Hare Hare」Dance NAYEON ver",
        "APAGAR FUEGO CON COCACOLA (???)"
    ];

    const informaciones = [
        "128 k de vistas",
        "7.1 M de vistas",
        "1.2 M de vistas",
        "10 k de vistas"
    ];

    const links = [
        "https://youtube.com/shorts/de3IG02WHaA?si=CEoqal5-XhsvVZVj",
        "https://youtu.be/jmani2Nv3PU?si=3qvUsvv2FXv-VkHL",
        "https://youtube.com/shorts/6il8uLQ0PBE?si=alYnAXtJohpt6Vlj",
        "https://youtube.com/shorts/pEX9dfbCjm0?si=7thOZPD3zl1bS7XW"
    ];

    return (
        <div className="seccionVideo">
            <h2>Shorts</h2>
            <div className="shorts">
                <ul>
                    <li>
                        <a href={links[0]} target="_blank">
                            <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>                         
                        </a>
                    </li>
                    <li>
                        <a href={links[1]} target="_blank">
                            <Short imagen={linksShorts[1]} titulo={titulos[1]} descripcion={informaciones[1]}/>                         
                        </a>
                    </li>
                    <li>
                        <a href={links[2]} target="_blank">
                            <Short imagen={linksShorts[2]} titulo={titulos[2]} descripcion={informaciones[2]}/>                         
                        </a>
                    </li>
                    <li>
                        <a href={links[3]} target="_blank">
                            <Short imagen={linksShorts[3]} titulo={titulos[3]} descripcion={informaciones[3]}/>
                        </a>
                    </li>
                    <li>
                        <a href={links[0]} target="_blank">
                            <Short imagen={linksShorts[0]} titulo={titulos[0]} descripcion={informaciones[0]}/>                         
                        </a>
                    </li>                    
                </ul>
            </div>
        </div>
    );
}

export default Shorts;
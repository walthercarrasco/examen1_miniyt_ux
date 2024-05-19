import React from "react";
import "../../BarraRecomendaciones.css";
import BotonRecomendacion from "../atoms/RecBar/BotonRecomendacion";

const Recomendaciones = () => {
    return(
        <div className="filters">
            <BotonRecomendacion title="Todos"/>
            <BotonRecomendacion title="Musica"/>
            <BotonRecomendacion title="Mixes"/>
            <BotonRecomendacion title="Gorillaz"/>
            <BotonRecomendacion title="Ahorros"/>
            <BotonRecomendacion title="Videojuegos"/>
            <BotonRecomendacion title="Indie rock"/>
            <BotonRecomendacion title="Pop rock"/>
            <BotonRecomendacion title="Musica japones"/>
            <BotonRecomendacion title="Hip hop alternativo"/>
            <BotonRecomendacion title="Manga"/>
            <BotonRecomendacion title="Trailer"/>
        </div>
    );
}

export default Recomendaciones;
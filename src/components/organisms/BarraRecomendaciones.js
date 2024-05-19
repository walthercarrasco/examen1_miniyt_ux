import React from "react";
import "../../BarraRecomendaciones.css";

const BarraRecomendaciones = () => {
    return(
        
        <div className="filters">
                <button className="filter-options">Todos</button>
                <button className="filter-options">Música</button>
                <button className="filter-options">Mixes</button>
                <button className="filter-options">Gorillaz</button>
                <button className="filter-options">Ahorros</button>
                <button className="filter-options">Videojuegos</button>
                <button className="filter-options">Indie rock</button>
                <button className="filter-options">Pop rock</button>
                <button className="filter-options">Música japonesa</button>
                <button className="filter-options">Hip Hop alternativo</button>
                <button className="filter-options">Manga</button>
                <button className="filter-options">Tráiler</button>
        </div>
    );
}

export default BarraRecomendaciones;
import React from "react";
import "../../../BarraRecomendaciones.css";

const BotonRecomendacion = (params) => {
    const {title} = params;
    return(
        <button className="filter-options">{title}</button>
    );
}

export default BotonRecomendacion;
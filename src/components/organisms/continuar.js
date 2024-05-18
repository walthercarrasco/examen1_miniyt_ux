import React from "react";
import VerificaPantalla from "../verificaPantalla";

const ContinuarViendo = () => {

    const linksVideo = [
        "https://i.ytimg.com/vi/ro9_laKaPpE/maxresdefault.jpg"
    ];


    const linksCanales = [
        "https://i.scdn.co/image/ab67616d00001e026e5c5f1a2de0f26b481faf05"
    ];

    const titulos = [
        "J Alvarez, Ñejo & Dalmata - Sexo Sudor y Calor [Video Oficial]"
    ];

    const nombresCanales = [
        "J Alvarez"
    ];

    const fechas = [
        "176 M de vistas • hace 11 años"
    ];

    return (
        <div className="seccionVideo">
            <h2>Continuar Viendo</h2>
            <VerificaPantalla linksVideo={linksVideo} linksCanales={linksCanales} titlev={titulos} nombrecanal={nombresCanales} fecha={fechas} />
        </div>
    );
}

export default ContinuarViendo;
import React from "react";
import VerificaPantalla from "../verificaPantalla";

const MiMix = () => {

    const linksVideo = [
        "https://i.ytimg.com/vi/gSMYGP0TYC4/maxresdefault.jpg"
    ];


    const linksCanales = [
        "https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df"
    ];

    const titulos = [
        "BAD BUNNY x MORA - UNA VEZ | YHLQMDLG (Video Oficial)"
    ];

    const nombresCanales = [
        "Bad Bunny"
    ];

    const fechas = [
        "237 M de vistas • hace 3 años"
    ];

    return (
        <div className="seccionVideo">
            <h2>Recomendaciones</h2>
            <VerificaPantalla linksVideo={linksVideo} linksCanales={linksCanales} titlev={titulos} nombrecanal={nombresCanales} fecha={fechas} />
        </div>
    );
}

export default MiMix;
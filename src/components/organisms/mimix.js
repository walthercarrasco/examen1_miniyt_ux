import React from "react";
import VerificaPantalla from "../verificaPantalla";

const MiMix = () => {

    const linksVideo = [
        "https://i.ytimg.com/vi/gSMYGP0TYC4/maxresdefault.jpg",
        "https://i.ytimg.com/vi/Bm5iA4Zupek/maxresdefault.jpg",
        "https://i.ytimg.com/vi/qFLhGq0060w/maxresdefault.jpg",
        "https://i.ytimg.com/vi/a5uQMwRMHcs/maxresdefault.jpg"
    ];


    const linksCanales = [
        "https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df",
        "https://i.scdn.co/image/ab6761610000e5eb6e835a500e791bf9c27a422a",
        "https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb",
        "https://i.scdn.co/image/ab6761610000e5eba7bfd7835b5c1eee0c95fa6e"
    ];

    const titulos = [
        "UNA VEZ | YHLQMDLG",
        "Kanye West - Runaway ft. Pusha T",
        "I Feel It Coming ft. Daft Punk",
        "Instant Crush ft. Julian Casablanca"
    ];

    const nombresCanales = [
        "Bad Bunny",
        "Kanye West",
        "The Weeknd",
        "Daft Punk"
    ];

    const fechas = [
        "237 M de vistas • hace 3 años",
        "102 M de vistas • hace 13 años",
        "1.4 B de vistas • hace 7 años",
        "698 M de vistas • hace 10 años"
    ];

    return (
        <div className="seccionVideo">
            <h2>Mi Mix</h2>
            <VerificaPantalla linksVideo={linksVideo} linksCanales={linksCanales} titlev={titulos} nombrecanal={nombresCanales} fecha={fechas} />
        </div>
    );
}

export default MiMix;
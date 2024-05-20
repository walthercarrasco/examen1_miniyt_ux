import React from "react";
import VerificaPantalla from "../verificaPantalla";

const Recomendaciones = () => {

    const linksVideo = [
        "https://i.ytimg.com/vi/7pynaH-PPCA/maxresdefault.jpg",
        "https://i.ytimg.com/vi/tCXGJQYZ9JA/maxresdefault.jpg",
        "https://i.ytimg.com/vi/kOHB85vDuow/maxresdefault.jpg",
        "https://i.ytimg.com/vi/3ymwOvzhwHs/maxresdefault.jpg"
    ];


    const linksCanales = [
        "https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df",
        "https://i.scdn.co/image/ab67616100005174e672b5f553298dcdccb0e676",
        "https://yt3.googleusercontent.com/kcV7NQkBm-UvvzVTJvrg1Yf1eHSqi-DLXuZPt_ECa3cHEPefujS951Dxj6KUEQ5i9Z7_fyMUjw=s900-c-k-c0x00ffffff-no-rj",
        "https://yt3.googleusercontent.com/kcV7NQkBm-UvvzVTJvrg1Yf1eHSqi-DLXuZPt_ECa3cHEPefujS951Dxj6KUEQ5i9Z7_fyMUjw=s900-c-k-c0x00ffffff-no-rj"
    ];

    const titulos = [
        "BAD BUNNY - YO VISTO ASÍ",
        "Taylor Swift - Delicate",
        "TWICE \"FANCY\" M/V",
        "TWICE \"Feel Special\" M/V"
    ];

    const nombresCanales = [
        "Bad Bunny",
        "Taylor Swift",
        "JYP Entertainment",
        "JYP Entertainment"
    ];

    const fechas = [
        "127 M de vistas • hace 3 años",
        "500 M de vistas • hace 6 años",
        "627 M de vistas • hace 5 años",
        "504 M de vistas • hace 4 años"
    ];

    const links = [
        "https://youtu.be/7pynaH-PPCA?si=a1W0MNPBcWPUd6TI",
        "https://youtu.be/tCXGJQYZ9JA?si=_5AsZBKiBMZedH8W",
        "https://youtu.be/kOHB85vDuow?si=N7TltUvijb1Fg122",
        "https://youtu.be/3ymwOvzhwHs?si=iy_sMecKlfhxLX6Q"
    ];


    return (
        <div className="seccionVideo">
            <h2>Recomendaciones</h2>
            <VerificaPantalla linksVideo={linksVideo} linksCanales={linksCanales} titlev={titulos} nombrecanal={nombresCanales} fecha={fechas} links={links}/>
        </div>
    );
}

export default Recomendaciones;
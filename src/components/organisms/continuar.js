import React from "react";
import VerificaPantalla from "../verificaPantalla";

const ContinuarViendo = () => {

    const linksVideo = [
        "https://i.ytimg.com/vi/ro9_laKaPpE/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ixLPADNTgBI/maxresdefault.jpg",
        "https://i.ytimg.com/vi/dI3xkL7qUAc/hq720.jpg",
        "https://i.ytimg.com/vi/B1ct00mPGtM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEXN50lfQRontZYf7erAEtUz14yg"
    ];


    const linksCanales = [
        "https://i.scdn.co/image/ab67616d00001e026e5c5f1a2de0f26b481faf05",
        "https://i.scdn.co/image/ab67616d0000b273bfffa664e6230db6273776a0",
        "https://i.scdn.co/image/ab6761610000e5ebe94f88ff74ae4ddcab961f97",
        "https://img.freepik.com/fotos-premium/fondo-cuadrado-abstracto-azul_7954-23257.jpg"
    ];

    const titulos = [
        "Sexo Sudor y Calor [Video Oficial]",
        "José José - Preso",
        "Doja Cat - Need to Know",
        "La Salsa de Gojo vs Sukuna"
    ];

    const nombresCanales = [
        "J Alvarez",
        "José José",
        "Doja Cat",
        "Coso"
    ];

    const fechas = [
        "176 M de vistas • hace 11 años",
        "15 M de vistas • hace 3 años",
        "330 M de vistas • hace 2 años",
        "182 k vistas • hace 3 semanas"
    ];

    return (
        <div className="seccionVideo">
            <h2>Continuar Viendo</h2>
            <VerificaPantalla linksVideo={linksVideo} linksCanales={linksCanales} titlev={titulos} nombrecanal={nombresCanales} fecha={fechas} />
        </div>
    );
}

export default ContinuarViendo;
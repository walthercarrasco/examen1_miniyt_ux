import Video from "./molecules/video";

const VerificaPantalla = ({linksVideo, linksCanales, titlev, nombrecanal, fecha}) => {
    if (window.innerWidth >= 1100) {
        return (
            <ul id="pantalla1100">
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
            </ul>
        );
    }
    if (window.innerWidth >= 800 && window.innerWidth < 1100){
        return (
            <ul id="pantalla800">
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>                
            </ul>
        );
    }
    if(window.innerWidth < 800){
        return (
            <ul id="pantalla500">
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
            </ul>
        );
    }
}

export default VerificaPantalla;
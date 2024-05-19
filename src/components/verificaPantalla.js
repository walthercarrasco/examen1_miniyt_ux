import Video from "./molecules/video";

const VerificaPantalla = ({linksVideo, linksCanales, titlev, nombrecanal, fecha}) => {
    if (window.innerWidth >= 1100) {
        return (
            <ul id="pantalla1100">
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={titlev[0]} nombrecanal={nombrecanal[0]} fecha={fecha[0]} />
                </li>
                <li>
                    <Video imagen={linksVideo[1]} imagencanal={linksCanales[1]} titlev={titlev[1]} nombrecanal={nombrecanal[1]} fecha={fecha[1]} />
                </li>
                <li>
                    <Video imagen={linksVideo[2]} imagencanal={linksCanales[2]} titlev={titlev[2]} nombrecanal={nombrecanal[2]} fecha={fecha[2]} />
                </li>
                <li>
                    <Video imagen={linksVideo[3]} imagencanal={linksCanales[3]} titlev={titlev[3]} nombrecanal={nombrecanal[3]} fecha={fecha[3]} />
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
                    <Video imagen={linksVideo[1]} imagencanal={linksCanales[1]} titlev={titlev[1]} nombrecanal={nombrecanal[1]} fecha={fecha[1]} />
                </li>
                <li>
                    <Video imagen={linksVideo[2]} imagencanal={linksCanales[2]} titlev={titlev[2]} nombrecanal={nombrecanal[2]} fecha={fecha[2]} />
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
                    <Video imagen={linksVideo[1]} imagencanal={linksCanales[1]} titlev={titlev[1]} nombrecanal={nombrecanal[1]} fecha={fecha[1]} />
                </li>
            </ul>
        );
    }
}

export default VerificaPantalla;
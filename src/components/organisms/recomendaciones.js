import React from "react";
import Video from "../molecules/video";

const Recomendaciones = () => {

    const linksVideo = [
        "https://i.ytimg.com/vi/gSMYGP0TYC4/maxresdefault.jpg"
    ]


    const linksCanales = [
        "https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df"
    ]

    return (
        <div className="seccionVideo">
            <h2>Recomendaciones</h2>
            <ul>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={"BAD BUNNY x MORA - UNA VEZ | YHLQMDLG (Video Oficial)"} nombrecanal={"Bad Bunny"} fecha={"hace 3 años"} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={"BAD BUNNY x MORA - UNA VEZ | YHLQMDLG (Video Oficial)"} nombrecanal={"Bad Bunny"} fecha={"hace 3 años"} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={"BAD BUNNY x MORA - UNA VEZ | YHLQMDLG (Video Oficial)"} nombrecanal={"Bad Bunny"} fecha={"hace 3 años"} />
                </li>
                <li>
                    <Video imagen={linksVideo[0]} imagencanal={linksCanales[0]} titlev={"BAD BUNNY x MORA - UNA VEZ | YHLQMDLG (Video Oficial)"} nombrecanal={"Bad Bunny"} fecha={"hace 3 años"} />
                </li>
            </ul>
        </div>
    );
}

export default Recomendaciones;
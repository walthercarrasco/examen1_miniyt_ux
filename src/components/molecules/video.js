import React from "react";
import ImagenVideo from "../atoms/imagevideos";
import IconCanal from "../atoms/canalicon";
import TitleVideo from "../atoms/titlevideo";
import VideoDescription from "../atoms/videodescription";

const Video = ({imagen, imagencanal, titlev, nombrecanal, fecha, link}) => {
    return (
        <a href={link} target="_blank">
            <div className="video">
                <ImagenVideo imagen={imagen} />
                <div className="infoVideo">
                    <div className="cositas">
                        <IconCanal ImgenCanal={imagencanal}/>
                    </div>
                    <div className="nose">
                        <TitleVideo title={titlev}/>    
                        <VideoDescription informacion={nombrecanal}/>
                        <VideoDescription informacion={fecha}/>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Video;
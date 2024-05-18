import React from "react";
import ImagenVideo from "../atoms/imagevideos";
import IconCanal from "../atoms/canalicon";
import TitleVideo from "../atoms/titlevideo";
import VideoDescription from "../atoms/videodescription";

const Video = ({imagen, imagencanal, titlev, nombrecanal, fecha}) => {
    return (
        <div className="video">
            <ImagenVideo imagen={imagen} />
            <div>
                <IconCanal ImgenCanal={imagencanal}/>
                <div>
                    <TitleVideo title={titlev}/>
                    <VideoDescription informacion={nombrecanal}/>
                    <VideoDescription informacion={fecha}/>
                </div>
            </div>
        </div>
    );
}

export default Video;
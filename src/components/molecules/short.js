import ImagenShort from "../atoms/imagesshorts";
import TitleVideo from "../atoms/titlevideo";
import VideoDescription from "../atoms/videodescription";

const Short = ({imagen, titulo, descripcion}) => {

    return (
        <div className="short">
            <ImagenShort imagen={imagen}/>
            <div>
                <TitleVideo title={titulo}/>
                <VideoDescription informacion={descripcion}/>
            </div>
        </div>
    );
}

export default Short;
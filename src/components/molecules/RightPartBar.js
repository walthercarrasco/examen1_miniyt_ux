import React from "react"
import '../../jorge.css';
import IconoBusqueda3 from "../atoms/IconoBusqueda3";
import IconoCamara from "../atoms/IconoCamara";
import IconoNotificacion from "../atoms/IconoNotificacion";
import ImagenUsuario from "../atoms/ImagenUsuario";

const RightPartBar = () => {
    return (
        <div className="right">
            <IconoBusqueda3/>
            <IconoCamara/>
            <IconoNotificacion/>
            <ImagenUsuario/>
        </div>
    );
}

export default RightPartBar;
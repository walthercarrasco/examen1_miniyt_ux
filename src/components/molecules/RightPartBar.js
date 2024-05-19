import React from "react"
import '../../jorge.css';
import IconoBusqueda3 from "../atoms/SearchBar/IconoBusqueda3";
import IconoCamara from "../atoms/SearchBar/IconoCamara";
import IconoNotificacion from "../atoms/SearchBar/IconoNotificacion";
import ImagenUsuario from "../atoms/SearchBar/ImagenUsuario";

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
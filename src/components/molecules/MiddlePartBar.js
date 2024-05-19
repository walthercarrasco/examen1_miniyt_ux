import React from "react"
import '../../jorge.css';
import IconoBusqueda1 from "../atoms/SearchBar/IconoBusqueda1";
import InputBusqueda from "../atoms/SearchBar/InputBusqueda";
import IconoBusqueda2 from "../atoms/SearchBar/IconoBusqueda2";
import IconoVoz from "../atoms/SearchBar/IconoVoz";

const MiddlePartBar = () => {
    return (
        <div className="middle">
            <div className="inputSearchBox">
                <IconoBusqueda1/>
                <InputBusqueda/>
            </div>
            <IconoBusqueda2/>
            <IconoVoz/>
        </div>
    );
}

export default MiddlePartBar;
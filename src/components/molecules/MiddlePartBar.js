import React from "react"
import '../../jorge.css';
import IconoBusqueda1 from "../atoms/IconoBusqueda1";
import InputBusqueda from "../atoms/InputBusqueda";
import IconoBusqueda2 from "../atoms/IconoBusqueda2";
import IconoVoz from "../atoms/IconoVoz";

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
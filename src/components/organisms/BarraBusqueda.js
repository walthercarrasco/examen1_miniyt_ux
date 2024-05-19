import React from "react";
import '../../jorge.css';
import LeftPartBar from "../molecules/LeftPartBar";
import MiddlePartBar from "../molecules/MiddlePartBar";
import RightPartBar from "../molecules/RightPartBar";

const BarraBusqueda = () => {
    return(
        <header className="header" pla>
            <LeftPartBar/>
            <MiddlePartBar/>
            <RightPartBar/>
        </header>
    );
}

export default BarraBusqueda;
import React from "react";
import '../../jorge.css';
import LeftPartBar from "../molecules/LeftPartBar";
import MiddlePartBar from "../molecules/MiddlePartBar";
import RightPartBar from "../molecules/RightPartBar";

const barraBusqueda = () => {
    return(
        <header className="header">
            <LeftPartBar/>
            <MiddlePartBar/>
            <RightPartBar/>
        </header>
    );
}

export default barraBusqueda;
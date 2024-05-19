import React from "react"
import '../../jorge.css';
import BotonExpandirLateral from "../atoms/SearchBar/BotonExpandirLateral";
import LogoNavBar from "../atoms/SearchBar/LogoNavBar";

const LeftPartBar = () => {
    return (
        <div className="left">
            <BotonExpandirLateral/>
            <LogoNavBar/>
        </div>
    );
}

export default LeftPartBar;
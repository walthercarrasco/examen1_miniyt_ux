import React from "react"
import '../../jorge.css';
import BotonExpandirLateral from "../atoms/BotonExpandirLateral";
import LogoNavBar from "../atoms/LogoNavBar";

const LeftPartBar = () => {
    return (
        <div className="left">
            <BotonExpandirLateral/>
            <LogoNavBar/>
        </div>
    );
}

export default LeftPartBar;
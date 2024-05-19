import React from "react"
import SideBarIcon from "../atoms/SideBar/SideBarIcon";
import "../../BarraLateral.css";

const SideBarOption = ({title, imagen}) => {
    return (
        <a className="links">
            <SideBarIcon imagen={imagen}/>
            {title}
        </a>
    );
}

export default SideBarOption;
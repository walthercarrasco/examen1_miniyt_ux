import React from "react"
import SideBarIcon from "../atoms/SideBar/SideBarIcon";
import "../../BarraLateral.css";

const SideBarOptionSubs = ({title, imagen}) => {
    return (
        <a className="subs">
            <SideBarIcon imagen={imagen}/>
            {title}
        </a>
    );
}

export default SideBarOptionSubs;
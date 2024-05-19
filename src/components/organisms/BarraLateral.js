import React from "react";
import '../../BarraLateral.css'

import img1 from "../../images/ocho.jpg";
import img2 from "../../images/adrian.jpg";
import img3 from "../../images/alec.jpg";
import img4 from "../../images/meyers.jpg";
import img5 from "../../images/yelin.jpg";

import home from "../../images/home3.png";
import shorts from "../../images/shorts5.png";
import suscripcion from "../../images/subscription2.png";
import user from "../../images/channel.png";
import historial from "../../images/reloj2.png";
import playList from "../../images/playList2.png";
import video from "../../images/goVideo1.png";
import clock from "../../images/clock2.png";
import like from "../../images/like2.png";
import SideBarOption from "../molecules/SideBarOption";
import SideBarOptionSubs from "../molecules/SideBarOptionSubs";

const BarraLateral = () => {
    return(
        <div className="sidebar">

            <div className="desk">
                <SideBarOption title="Principal" imagen={home}/>
                <SideBarOption title="Shorts" imagen={shorts}/>
                <SideBarOption title="Suscripciones" imagen={suscripcion}/>
            </div>

            <hr class="seperator"/>
            <h3 className="names">Tu {'>'}</h3>
            
            <div className="desk">
                <SideBarOption title="Tu canal" imagen={user}/>
            </div>

            <div className="Tu">
            <SideBarOption title="Historial" imagen={historial}/>
            <SideBarOption title="Playlists" imagen={playList}/>
            <SideBarOption title="Tus videos" imagen={video}/>
            <SideBarOption title="Ver mas tarde" imagen={clock}/>
            <SideBarOption title="Videos que me gus..." imagen={like}/>
            </div>

            <hr class="seperator"/>
            <h3 className="names">Suscripciones</h3>

            <SideBarOptionSubs title="8cho" imagen={img1}/>
            <SideBarOptionSubs title="Adrian Saenz" imagen={img2}/>
            <SideBarOptionSubs title="Alex Hernandez" imagen={img3}/>
            <SideBarOptionSubs title="Alex Meyers" imagen={img4}/>
            <SideBarOptionSubs title="ANGELA Yelin" imagen={img5}/>
        </div>
    );
}

export default BarraLateral;
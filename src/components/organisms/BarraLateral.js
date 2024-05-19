import React from "react";
import '../../BarraLateral.css'
import { GoHomeFill,GoClock,GoVideo } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions,MdHistory,MdOutlinePlaylistPlay,MdSwitchAccount  } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaCut } from "react-icons/fa";

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
            <SideBarOption title="Principal" imagen={home}/>
            <SideBarOption title="Shorts" imagen={shorts}/>
            <SideBarOption title="Suscripciones" imagen={suscripcion}/>

            <hr class="seperator"/>

            <SideBarOption title="Tu canal" imagen={user}/>
            <SideBarOption title="Historial" imagen={historial}/>
            <SideBarOption title="Playlists" imagen={playList}/>
            <SideBarOption title="Tus videos" imagen={video}/>
            <SideBarOption title="Ver mas tarde" imagen={clock}/>
            <SideBarOption title="Videos que me gus..." imagen={like}/>

            <hr class="seperator"/>

            <SideBarOptionSubs title="8cho" imagen={img1}/>
            <SideBarOptionSubs title="Adrian Saenz" imagen={img2}/>
            <SideBarOptionSubs title="Alex Hernandez" imagen={img3}/>
            <SideBarOptionSubs title="Alex Meyers" imagen={img4}/>
            <SideBarOptionSubs title="ANGELA Yelin" imagen={img5}/>
        </div>
    );
}

export default BarraLateral;
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

import home from "../../images/home.png";
import shorts from "../../images/shorts3.png";
import suscripcion from "../../images/subscription.png";
import user from "../../images/usuario.png";
import historial from "../../images/historia.png";
import playList from "../../images/lista.png";
import video from "../../images/jugar.png";
import clock from "../../images/reloj.png";
import like from "../../images/boton-me-gusta.png";

const BarraLateral = () => {
    return(
        <div className="sidebar">
            <a className="links">
                <img src={home} alt="home"/>
                Principal
            </a>
            <a className="links">
                <img src={shorts} alt="home"/>
                Shorts
            </a>
            <a className="links">
            <img src={suscripcion} alt="home"/>
                Suscripciones
            </a>

            <hr class="seperator"/>

            <div className="text-side">
                <h3>Tu</h3>
            </div>

            <a className="links">
                <img src={user} alt="user"/>
                Tu canal
            </a>
            <a className="links">
                <img src={historial} alt=""/>
                Historial
            </a>
            <a className="links">
                <img src={playList} alt=""/>
                Playlists
            </a>
            <a className="links">
                <img src={video} alt=""/>
                Tus videos
            </a>
            <a className="links">
                <img src={clock} alt=""/>
                Ver más tarde
            </a>
            <a className="links">
                <img src={like} alt=""/>
                Videos que me gus...
            </a>

            <hr class="seperator"/>

            <a className="subs">
                <img src={img1} alt=""/>
                8cho
            </a>
            <a className="subs">
                <img src={img2} alt=""/>
                Adrain Saenz
            </a>
            <a className="subs">
                <img src={img3} alt=""/>
                Alex Hernandez
            </a>
            <a className="subs">
                <img src={img4} alt=""/>
                Alex Meyers
            </a>
            <a className="subs">
                <img src={img5} alt=""/>
                ANGELA Yelin
            </a>


        </div>
    );
}

export default BarraLateral;
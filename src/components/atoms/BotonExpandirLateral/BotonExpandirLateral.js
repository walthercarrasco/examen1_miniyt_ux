import React from "react"
import '../../../jorge.css';
import {AiOutlineMenu} from "react-icons/ai"

const BotonExpandirLateral = () => {
    return (
        <header className="header">
            <div className="left">
                <div>
                    <AiOutlineMenu/>
                </div>
                <div className="logo">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="Logo_bar"/>
                    {/* https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png */}
                </div>
            </div>
            <div className="middle">

            </div>
            <div className="right">

            </div>
        </header>
    );
}

export default BotonExpandirLateral;
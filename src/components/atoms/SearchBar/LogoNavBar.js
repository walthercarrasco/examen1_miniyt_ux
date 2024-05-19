import React from "react";
import '../../../jorge.css';
import logo from "../../../images/logo_dark.jpg";

const LogoNavBar = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Logo"/>
            {/* https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png */}
        </div>
    );
}

export default LogoNavBar;
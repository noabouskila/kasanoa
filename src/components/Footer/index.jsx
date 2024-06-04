import React from 'react';
import styles from "./Footer.module.scss";
import { Link } from 'react-router-dom';
import logo from "../../assets/logoKasa.png"

function Footer() {
    return (
       
        <footer >
            <Link to={"/Home"} >
                <img src={logo} alt="logo kasa" />
            </Link>
            <div>
                <p>@ 2020 Kasa, All rights reserved</p>
            </div>
            
        </footer>

    );
}

export default Footer;

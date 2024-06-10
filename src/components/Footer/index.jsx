import React from 'react';
import styles from "./Footer.module.scss";
import { Link } from 'react-router-dom';
import logoFooter from "../../assets/logoFooter.svg"

function Footer() {
    return (
       
        <footer >
            <Link to={"/Home"} >
                <img src={logoFooter} className={styles.FooterLogo} alt="logo kasa" />
            </Link>
           
            <p className={styles.FooterText} >@ 2020 Kasa, All rights reserved</p>
        </footer>

    );
}

export default Footer;

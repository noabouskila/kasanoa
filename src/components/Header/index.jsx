import React from 'react';
import styles from "./Header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/logoKasa.png"

function Header() {
    return (
        <div>
            <header className={styles.Header}>
                <Link to="/Home" className={styles.Logo} >
                    <img src={logo} alt="logo kasa" />
                </Link>

                <nav className={styles.Nav} >
                    <Link to="/Home"  className={styles.Nav1}>Accueil</Link>
                    <Link to="/About" className={styles.Nav2}>A Propos</Link>
                </nav>
            </header>
        </div>
       
    );
}

export default Header;
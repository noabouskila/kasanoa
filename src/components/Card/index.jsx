import React from 'react';
import  "./Card.module.scss";
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import { Link } from "react-router-dom";


function Card({title , cover , id}) {
    return (
        <div className={styles.Card} >
            <Link to={`/Logements/${id}`} >
                <img src={cover} alt={title} className={styles.CardCover} />
            </Link>
            <p className= {styles.CardTitle}>{title}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,  
    id: PropTypes.string.isRequired,
}
export default Card;
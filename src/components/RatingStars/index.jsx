import React from 'react';
import styles from "./RatingStars.module.scss";
import starActive from '../../assets/star-active.svg';
import starInactive from '../../assets/star-inactive.svg';
import PropTypes from 'prop-types';


function RatingStars({ rating }) {


    const maxStars = 5 
    const stars = []


    // generer les etoiles avec une boucle : cle unique 
    for( let i=1 ; i<=maxStars ; i++){

        if(i<= rating){
            stars.push(<img key={i} src={starActive}  alt='star active'/>)
        }
        else{
            stars.push(<img key={i} src={starInactive}  alt='star inactive'/>)
        }
    }

    
    return (
        <div className={styles.Rating}>
            {stars}
        </div>
    );
}


RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
};  
export default RatingStars;
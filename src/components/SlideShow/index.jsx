import React, { useState } from 'react';
import  styles from  "./SlideShow.module.scss";
import rightArrow from '../../assets/arrow-right.svg'
import leftArrow from '../../assets/arrow-left.svg'
import PropTypes from 'prop-types';


function SlideShow({pictures}) {

    const  [currentImageIndex , setCurrentImageIndex] = useState(0)


    // fleche suivante 
    const nextImage = () => {
        setCurrentImageIndex((nextIndex) =>
            nextIndex === pictures.length - 1 ? 0 : nextIndex + 1 
        )

    }

    // fleche precedente
    const prevImage =() =>{
        setCurrentImageIndex((prevIndex)=> 
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        )
    }

    // Condition pour cacher les flèches s'il n'y a qu'une seule image
    const hideArrows = pictures.length === 1 


    return (
        <div className={styles.Slideshow}>

            {/* fleche precedente */}
            {!hideArrows && (
                <img
                src= {leftArrow} 
                alt='fleche gauche precedente'
                onClick={prevImage}
                className={styles.IconLeft}
                />
            )}

            {/* image carrousel */}
            <img 
                src={pictures[currentImageIndex]}
                alt={`Slide ${currentImageIndex}`} 
                className={styles.SlideshowImage}
            />


            {/* index de l'image  */}
            {!hideArrows && (
                <p className={styles.CurrentImage}>
                    {currentImageIndex + 1 } /  {pictures.length}
                </p>
            )}


            {/* fleche suivante */}
            {!hideArrows && (
                <img
                src={rightArrow} 
                alt='fleche droite suivante'
                onClick={nextImage}
                className={styles.IconRight}
                />
            )}
            
        </div>
    );
}

SlideShow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
  
export default SlideShow;
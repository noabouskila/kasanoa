import React, { useEffect, useState } from 'react';
import  styles from "./Logements.module.scss"
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse'; 
import Rating from '../../components/RatingStars';
import SlideShow from '../../components/SlideShow'; 
import PropTypes from 'prop-types';




function Logements() {

    // useParams pour recuperer l'id dela page selectionnée
    const { id } = useParams();
    // etat logement
    const  [accommodation , setAccommodation] = useState(null)
    // etat tableau des pictures
    const [pictures , setPictures] = useState([])
    // use navigate pour redirection vers 404 si besoin 
    const navigate = useNavigate()


    // charger les données a chaque changement d'id 
    useEffect(()=>{
        const fetchData = async () =>{

            try{
                const response = await fetch('/data/logements.json')
                // gestion erreur specifique : reponse reseau : 
                if(!response.ok){
                    throw new Error('Erreur de chargement du fichier json : ' , response.statusText)
                }
                const data =  await response.json()

                console.log(data)

                // trouver  l'hebergement avec find 
                const foundAccommodation = data.find(item => item.id === id )

                // Gestion de l'erreur 404 avec redirection 
                if(!foundAccommodation){
                    navigate('/Error/index.jsx')
                    return; 
                }

                // mise a jour logement et photos 
                setAccommodation(foundAccommodation)
                setPictures(foundAccommodation ? foundAccommodation.pictures : [])

            }catch(error){
                console.error("lerreur est : " , error)
            }

        }

        fetchData()

    },[id,navigate])






    return (
        <div>
            
            {accommodation  && (
                <>
                    {/* carrousel  */}
                    {/* comme parametre l'etat actualisé  */}
                    <SlideShow pictures={pictures}/>
                    {/* fin  carrousel */}

                    <div className={styles.Accommodation}>
                        <div>

                            <h2 className= {styles.AccommodationTitle}>{accommodation.title}</h2>
                            <p className={styles.AccommodationText} >{accommodation.location} </p>

                            {/* Tags */}
                            <div className={styles.AccommodationTags} >

                                {accommodation.tags.map((tag, index)=> (
                                    <span key={index} className={styles.AccommodationTag} >
                                        {tag}
                                        {/* si index est pas le dernier : ajoute un espace  */}
                                        {index < accommodation.tags.length -1 && ' '}
                                    </span>
                                ))}
                            </div>
                        </div>
                       

                        {/* profile et rating  */}
                        <div className={styles.AccommodationProfileRating} >

                            {/* profile */}
                            <div className={styles.AccommodationProfile} >
                                <p className={styles.AccommodationName} >{accommodation.host.name} </p>
                                <img className={styles.AccommodationPicture} src={accommodation.host.picture} alt="profile de l'hôte" />
                            </div>

                            {/* Rating base par defaut de parseint est 10  */}
                            <Rating className={styles.AccommodationRating} rating={parseInt(accommodation.rating, 10)} />
                            
                        </div>
                        
                    </div>

                    {/* Collapse Description et Equipements  */}
                    <div className={styles.AccommodationCollapse} >

                        {/* description */}
                        <div className={styles.Collapse} >
                            <Collapse title='Description' text ={accommodation.description} />
                        </div>

                        {/* equipements */}
                        <div className={styles.Collapse} >
                            <Collapse title="Equipements" text={
                                accommodation.equipments.map((equipment , index) => (
                                    <li key = {index} > {equipment} </li>
                                ))
                            } />
                        </div>

                    </div>

                </>

            )}
        
        </div>
    );
}


Logements.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string)
  };

export default Logements;
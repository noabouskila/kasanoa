import React, { useEffect, useState } from 'react';
import styles from "./Home.module.scss"
import Card from '../../components/Card';


function Home() {

    const [card , setCard] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('/data/logements.json')
                const data = await response.json()

                // mise a jour de l'etat avec les données json
                setCard(data)

            }catch(error) {
                console.log("erreur lors du chargement des données : ", error)
            }
        }
        fetchData()
    }, [])

   





    return (
        <div className= {styles.Home} >

            <div className= {styles.Banner} >
                <h1>Chez vous, partout et ailleurs</h1> 
            </div>

            <div className={styles.Contain} >
                <div className= {styles.CardList}>
                    {card.map( card=>(

                        <Card
                        key={card.id}
                        title={card.title}
                        cover={card.cover}
                        id={card.id}
                        />
                    ))}
                </div>
            </div>
           
        </div>
    );
}

export default  Home;
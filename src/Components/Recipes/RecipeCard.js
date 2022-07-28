import React from 'react'
import Card from 'react-bootstrap/Card';
import styles from "./index.module.css"
const RecipeCard = (props) => {  
    
      return (
       <Card className={styles.card}>
       <a className={styles.a} href={props.src}>
       <Card.Title className={styles.header}>{props.title}</Card.Title>   
       </a>
       <Card.Body className={styles.cardBody}>
       <img className={styles.reacipesImg} src={props.img} alt={props.alt} />
       </Card.Body>
     </Card>  
   
     )
}

export default RecipeCard
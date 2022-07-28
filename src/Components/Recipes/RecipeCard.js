import React from 'react'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import styles from "./index.module.css"
const RecipeCard = (props) => {  
   const Header=styled(Card.Title)`
   text-align: center;
   font-size: 26px;
   font-weight: bold;
   margin-top: 20px;
   `
   
    const MyCard=styled(Card)`
    width:23rem;
    margin:0;
    margin-top:60px;
    height:25rem;
    transition: all 0.3s ease-in;
    columns:black;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    &:hover
    {
       cursor: pointer;
       transform: scale(1.1, 1.1);
      background-color: orange;
       color: white;
    }
    `
    const ReacipesImg =styled.img`
         src:'${props.img}';
         width:100%;
         max-width: fit-content;
         max-height: 16rem;
         margin-left:-15px;
         height:100%;
         margin-bottom: -15px;
         margin-right: -15px;
         
    `
    
      return (
       <MyCard>
       <a className={styles.a} href={props.src}>
       <Header>{props.title}</Header>   
       </a>
       <Card.Body>
       <ReacipesImg src={props.img} alt={props.alt} />
       </Card.Body>
     </MyCard>  
   
     )
}

export default RecipeCard
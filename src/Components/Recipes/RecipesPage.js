import React from 'react'
import BgDiv from '../Home/BgDiv'
import styles from "../Home/index.module.css"
import axios from 'axios';
import MyStyle from './index.module.css'
import { useEffect,useState } from 'react';
import { Grid } from '@material-ui/core';
import NavbarComponent from '../Navbar/NavbarComponent'
import RecipeCard from './RecipeCard';
const RecipesPage = () => {
  const [Recipes,setRecipes]=useState([])
 useEffect(() => {
  async function getData()
   {
        const url ="https://api.spoonacular.com/recipes/complexSearch?apiKey=66c236119ce0410b851b69b287740e67&query=pasta&number=50"
       const data =await axios.get(url); 
      localStorage.setItem('reacipes', JSON.stringify(data.data.results));
       setRecipes(data.data.results);
       console.log(data.data.results);
  }
     getData();
 }, []) 
 function kkk(){
  alert(JSON.stringify(Recipes[0]))
 }
  return (
    <div>
    <div className={styles.bgDiv}>
    <NavbarComponent/>
        <BgDiv/>
    </div>
    <div className={MyStyle.container}>
      <h1 onClick={kkk}>Cook With Home Chef </h1>
       <input name='search' type='search' placeholder="Search for a recipe"/>
       <Grid container spacing ={2} >
       {Recipes&&Array.from(Recipes).map((recipe)=><Grid align="center" item xs={12} sm={12} md={6} lg={4}><RecipeCard   img={recipe.image} title={recipe.title}/> </Grid>)}
       </Grid>
    </div>
      
    </div>
  )
}

export default RecipesPage
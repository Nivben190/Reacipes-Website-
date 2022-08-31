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
  const [query,setQuery] = useState("");
 useEffect(() => {

  async function getRecipes()
  {
    const url="https://api.spoonacular.com/food/search?apiKey=66c236119ce0410b851b69b287740e67"
    const data =await axios.get(url);
     localStorage.setItem('reacipes', JSON.stringify(data.data.searchResults[0].results));
      setRecipes(data.data.searchResults[0].results);
  }
  getRecipes();
 }, []) 
 
  async function searchRecipes(event)
 {   
  
    setQuery(event.target.value);
    const url=`https://api.spoonacular.com/food/search?query=${query}&&apiKey=66c236119ce0410b851b69b287740e67`

    const data =await axios.get(url);
    setRecipes(data.data.searchResults[0].results);
  }

  return (
    <div>
    <div className={styles.bgDiv}>
    <NavbarComponent/>
        <BgDiv/>
    </div>
    <div className={MyStyle.container}>
      <h1 >Cook With Home Chef </h1>
       <input className={MyStyle.input} name='search' type='search' onChange={searchRecipes} placeholder="Search for a recipe"/>
       <Grid container spacing ={2} >
       {Recipes&&Array.from(Recipes).map((recipe,index)=><Grid align="center" key={index}  item xs={12} sm={12} md={6} lg={4}><RecipeCard  id={index} key={index} img={recipe.image}  src={recipe.link} title={recipe.name}/> </Grid>)}
       </Grid>
    </div>
      
    </div>
  )
}

export default RecipesPage
import React from 'react'
import {Grid} from "@material-ui/core"
import CardComponent from './CardComponent'
const CardsDiv = () => {
  return (
    <Grid container 
    align="center"   
     spacing={0}>
                <Grid   item xs={12} md={6} lg={3} spacing={10}>
                <CardComponent 
                title="Pick a meal"
               desc="There are different meals every week to choose from. This gives you a variety of options to switch it up.">
                </CardComponent>
                </Grid>
                <Grid item xs={12} md={6} lg={3} spacing={10}>
                <CardComponent 
                title="Customize it"
               desc="Choose your favorite recipes that you want to cook. Pick the category you love.">
                </CardComponent>
                </Grid>
                <Grid item  xs={12} md={6} lg={3} spacing={10}>
                <CardComponent 
                title="Cook it up"
               desc="Order the meal you have chosen. Fresh and packed ingredients straight to your door step.">
                </CardComponent>
                </Grid>
                </Grid>
  )
}

export default CardsDiv

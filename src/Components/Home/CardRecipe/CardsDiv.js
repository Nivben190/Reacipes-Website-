import React from 'react'
import {Grid} from "@material-ui/core"
import CardComponent from './CardComponent'
const CardsDiv = () => {
  return (
    <Grid container
    alignItems="center"
    justifyContent="center"
    align="center"
   >
                <Grid item xs={12} md={4} lg={3} >
                <CardComponent 
                title="Pick a meal"
                desc="There are different meals every week to choose from. This gives you a variety of options to switch it up.">
                </CardComponent>
                </Grid>
                <Grid item xs={12} md={4} lg={3} >
                <CardComponent 
                title="Customize it"
               desc="Choose your favorite recipes that you want to cook. Pick the category you love.">
                </CardComponent>
                </Grid>
                <Grid item  xs={12} md={4} lg={3} >
                <CardComponent 
                title="Cook it up"
               desc="Order the meal you have chosen. Fresh and packed ingredients straight to your door step.">
                </CardComponent>
                </Grid>
      </Grid>
  )
}

export default CardsDiv

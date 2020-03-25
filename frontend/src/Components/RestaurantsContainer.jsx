import React from "react";
import Restaurant from "./Restaurant"

const RestaurantsContainer = (props) => {
  
  let arrayOfComponents = props.restaurants.map((restaurantOBJ) => {
    return <Restaurant key={restaurantOBJ.id} restaurant={restaurantOBJ}/>
  })
  
  return (
    <div id="restaurant">
        {arrayOfComponents}
    </div>
  ) 
}

export default RestaurantsContainer;
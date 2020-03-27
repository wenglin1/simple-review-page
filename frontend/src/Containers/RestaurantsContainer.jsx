import React from "react";
import Restaurant from "./Restaurant"

const RestaurantsContainer = (props) => {
  
  let arrayOfComponents = props.restaurants.map((restaurant) => {
    return <Restaurant key={restaurant.id} restaurant={restaurant}/>
  })
  
  return (
    <div id="restaurant">
        {arrayOfComponents}
    </div>
  ) 
}

export default RestaurantsContainer;
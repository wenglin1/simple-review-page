import React from "react";
import Review from "./Review"

const ReviewContainer = (props) => {

  console.log(restaurants.review)  
  let arrayOReviews = props.restaurants.review.map((reviewOBJ) => {
    return <Reviews key={reviewOBJ.id} review={reviewOBJ}/>
  })
  
  return (
    <div id="restaurant">
        {arrayOfReviews}
    </div>
  ) 
}

export default ReviewContainer;
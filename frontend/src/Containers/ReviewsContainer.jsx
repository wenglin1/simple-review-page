import React from "react";
import Review from "./Review";
import NewReview from "./NewReview"


const ReviewsContainer = (props) => {

  console.log(props)  
  let arrayOfReviews = props.foundRestaurant.reviews.map((reviewOBJ) => {
    return <Review key={reviewOBJ.id} review={reviewOBJ}/>
  })
  
  return (
    <div id="review">
        <h1>{props.foundRestaurant.name}</h1>
        <div>{ arrayOfReviews }</div>
        <NewReview token={props.token} addReview={props.addReview}/>
    </div>
    
  ) 
}

export default ReviewsContainer;
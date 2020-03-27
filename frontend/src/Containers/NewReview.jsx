import React, { Component } from 'react';
import Review from './Review';

class NewReview extends Component {

  state = {
    description: "",
    rating: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
      console.log(this.props.restaurant)
      fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.props.token}`
        },
        body: JSON.stringify({
          rating: this.state.rating,
          description: this.state.description,
          restaurant_id: this.props.restaurant.id
        })
      })
      .then(r => r.json())
      .then(r => {
        console.log(r)
        if (r.id) {
          this.props.addReview(r)
        } else {
          console.log(":(")
        }
      })    
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    let {rating, description} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>New Review</h1>
        <label htmlFor="rating">Rating:</label>
        <input type="integer" autoComplete="off" name="rating" value={rating} onChange={this.handleChange}/>
        <label htmlFor="description">Description:</label>
        <input type="text" autoComplete="off" name="description" value={description} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default NewReview;
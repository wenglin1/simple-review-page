import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Restaurant extends Component {

    state = {
        reviews: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/reviews")
        .then(r => r.json())
        .then(newArray => {
            this.setState({
                reviews: newArray
            })
        })
    }

    handleClick = (e) => {
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
    }
    
    render() {

        let {name, location, cuisine} = this.props.restaurant

        return (
            <div className="card">
                <img src={"https://placehold.it/240x240"} alt={name} className="restaurantImg" onClick={this.handleClick}/>
                <div className="card_content">
                    <h3 className="card_title">{name}</h3>
                    <div className="card_detail">
                        <p>Location: {location}</p>
                        <p>Cuisine: {cuisine}</p>
                    </div>
                    <button onClick={this.handleClick}>Reviews</button>
                </div>
            </div>
    );
  }
}

export default withRouter(Restaurant)

import React, { component, Component } from 'react'
import Review from './Review'

class Restaurant extends Component {

    state = {
        clicked: false
    }

    changeState = (e) => {
        this.setState({
            clicked: !this.state.clicked
        })    
    }
  

    
    render() {

        let {name, location, cuisine, rating, img_url} = this.props.restaurant

        return (
            <div className="card">
                <img src={"https://placehold.it/240x240"} alt={name} className="restaurantImg" onClick={this.handleClick}/>
                <div className="card_content">
                    <h3 className="card_title">{name}</h3>
                    <div className="card_detail">
                        <p>Location: {location}</p>
                        <p>Rating: {rating}</p>
                        <p>Cuisine: {cuisine}</p>
                    </div>
                    <button onClick={this.handleClick}>Reviews</button>
                </div>
            </div>
    );
  }
}

export default Restaurant
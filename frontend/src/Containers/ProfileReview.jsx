import React, { Component } from 'react'

class ProfileReview extends Component {

    handleDelete = () => {
        this.props.handleDelete(this.props.review.id)
    }

    render () {

        let {rating, description, restaurant} = this.props.review
        console.log(this.props.review.restaurant_id)
        return (
            <div className="review-card">
                <div className="card_content">
                    <div className="card_detail">
                        <p>Rating: {rating}</p>
                        <p>Description: {description}</p>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>                    
                </div>    
            </div>
        )
    }
}

export default ProfileReview
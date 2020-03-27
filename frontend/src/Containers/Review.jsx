import React, { Component } from 'react'

class Review extends Component {

    render () {

        let {rating, description} = this.props.review
        console.log(this.props.review.user)
        return (
            <div className="review-card">
                <div className="card_content">
                    <div className="card_detail">
                        <p>Rating: {rating}</p>
                        <p>Description: {description}</p>
                    </div>                    
                </div>    
            </div>
        )
    }
}

export default Review
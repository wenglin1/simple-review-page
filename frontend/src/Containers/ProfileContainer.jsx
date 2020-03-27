import React, { Component } from 'react';
import ProfileReview from './ProfileReview.jsx'

class ProfileContainer extends Component {


  render() {
    
    let {username, reviews} = this.props.user
  
    let arrayOfReviews = reviews.map((review) => {
        return <ProfileReview key={review.id} review={review} handleDelete={this.props.handleDelete}/>
    })

    return (
      <div id="profile-card">
        <h1>{username}'s Profile</h1>
        <h3>Restaurant Reviews</h3>
          <ol>
            {arrayOfReviews}
          </ol>
      </div>
    );
  }
}

export default ProfileContainer;
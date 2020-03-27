import React, { Component } from "react";
import './App.css';

import RestaurantsContainer from "./Containers/RestaurantsContainer.jsx";
import ReviewsContainer from './Containers/ReviewsContainer.jsx'
import ProfileContainer from './Containers/ProfileContainer.jsx'

import {Route, Switch, withRouter} from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import NavBar from './Components/NavBar.jsx'
import LogIn from './Components/LogIn.jsx'
import Register from './Components/Register.jsx'
import Home from './Components/Home.jsx'

class App extends Component {

  state = {
    restaurants: [],
    user: {
      id: 0,
      username: "",
      reviews: []
    },
    reviews: [],
    token: ""
  }

  componentDidMount = () => {
    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }

    fetch("http://localhost:3000/restaurants")
    .then(r => r.json())
    .then(newArray => {
      this.setState({
        restaurants: newArray
      })
    })
  }

  handleResponse = (response) => {
    if (response.user) {
      localStorage.token = response.token
      localStorage.token = response.token
      this.setState(response, () => {
        this.props.history.push("/profile")
      })
    } else {
      alert(response.error)
    }
  }

  handleRegister = (userInfo) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleLogin = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      let filteredArray = this.state.reviews.filter(review => {
        return review.id !== id
      })
      this.setState({
        reviews: filteredArray,
      },
      this.props.history.push("/profile"))
      
    })
  }

  addReview = (reviewObj) => {
    let stateRestaurants = [...this.state.restaurants]
    let filteredArray = stateRestaurants.map(restaurant => {
      if (restaurant.id === reviewObj.restaurant_id) {
        restaurant.reviews = [...restaurant.reviews, reviewObj]
        return restaurant
      } else {
        return restaurant 
      }
    }) 
    this.setState({
      user: {
        ...this.state.user,
        reviews: [...this.state.user.reviews, reviewObj]
      },
      restaurants: filteredArray
    })
  }

  renderHome = () => {
    return <Home />
  }

  renderLogin = () => {
    return <LogIn handleSubmit={this.handleLogin}/>
  }

  renderRegister = () => {
    return <Register handleSubmit={this.handleRegister}/>
  }

  renderRestaurants = () => {
    return <RestaurantsContainer restaurants={this.state.restaurants}/>
  }

  renderRestaurantPage = (routerProps) => {

    

    let newUrl = routerProps.match.params.id
    let foundRestaurant = this.state.restaurants.find((restaurant) => {
      return restaurant.id === parseInt(newUrl)
    })

    if (foundRestaurant) {
      return <ReviewsContainer foundRestaurant={foundRestaurant} token={this.state.token} addReview={this.addReview}/>
    } else {
      return <NotFound />
    }
  }

  renderProfile = () => {
    return <ProfileContainer user={this.state.user} handleDelete={this.handleDelete}/>
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact strict component={ this.renderHome }/>
          <Route path="/login" exact strict component={ this.renderLogin }/>
          <Route path="/register" exact strict component={ this.renderRegister }/>
          <Route path="/restaurants" exact strict component={ this.renderRestaurants } />
          <Route path="/profile" exact strict component={ this.renderProfile } />
          <Route path="/restaurants/:id" exact strict render={ this.renderRestaurantPage } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

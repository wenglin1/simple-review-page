import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

import RestaurantsContainer from "./Components/RestaurantsContainer";

class App extends Component {

  state = {
    restaurants: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/restaurants")
    .then(r => r.json())
    .then(newArray => {
      // console.log(newArray)
      this.setState({
        restaurants: newArray
      })
    })
  }

  render() {
    console.log(this.state.restaurants)
    return (
      <div className="App">
        <RestaurantsContainer restaurants={this.state.restaurants}/>
      </div>
    );
  }
}

export default App;

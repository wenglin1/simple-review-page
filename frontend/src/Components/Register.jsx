import React, { Component } from 'react';

class Register extends Component {
  
  state = {
    name: "",
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
   
    let {username, password, name} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">name:</label>
        <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/>
        <label htmlFor="username">username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Register;
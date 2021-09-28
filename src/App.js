import React from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import './App.css';

export default class App extends React.Component {
  state = {
    loggedIn: false,
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.loggedIn ? 
        <Dashboard />
        :
        <Login handleLogin={this.handleLogin} />
        }
      </div>
    );
  }

}
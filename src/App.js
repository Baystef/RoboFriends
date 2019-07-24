import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
// Arrow function is used to create the method cos it uses the 'this' of the parent class
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;

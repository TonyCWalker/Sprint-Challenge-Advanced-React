import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      players: [],
      country: []
    };
  }
  componentDidMount() {
    console.log("CDM");
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(response => this.setState({ players: response }))
      .catch(err => console.log("error"));
}

render() {
  console.log("rendering");
  console.log(this.state.players);
  return (
    <>
    <Navbar /> 
    <h1 className="App-header">Women's World Cup ⚽</h1>
    <div className="cardForPlayers" data-testid='MainApp'>
      {this.state.players.map(item => (
        <Card 
        key={item.id}
        item={item}
        />
      ))}
    </div>
  </>
  );
}
}

export default App;
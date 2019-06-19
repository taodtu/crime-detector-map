import React, { Component } from 'react';
import Map from './component/Map'
import './App.css';

const INITIAL_STATE = {
  position: [53.48, -2.24]
}
class App extends Component {
  state = {
    ...INITIAL_STATE
  }
  render() {
    const { position } = this.state
    return (
      <div className="App">
        <h1>Crime detector</h1>
        <Map position={position} />
      </div>
    );
  }
}

export default App;

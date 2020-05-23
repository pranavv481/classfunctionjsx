import React, { Component } from 'react';
import './App.css';
import { Greet } from '../src/components/Greet';
import Welcome from '../src/components/Welcome';
import Hello from '../src/components/Hello';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;

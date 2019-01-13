import React, { Component } from 'react';
import './App.css';
import NumberInput from './number-input.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      randomValue: Math.floor((Math.random() * 100) + 1)
    };
  }

  setDayRate(inputValue) {
    this.setState({
      inputValue
    });
}

  render() {
    return (
      <div className="App">
      <NumberInput
          value={this.state.inputValue}
          onChange={value => this.setDayRate(value)} />
      </div>
    );
  }

};

export default App;
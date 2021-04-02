import React, {Component} from 'react'

import './App.css';

import Header from './components/Header/Header.js'
import HeartComponent from './components/HeartComponent/HeartComponent.js'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <HeartComponent />
      </div>
    );
  }
}

export default App;

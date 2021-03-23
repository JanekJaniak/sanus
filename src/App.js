import React, {Component} from 'react'

import './App.css';

import Header from './components/Header/Header.js'
import MainContent from './components/MainContent/MainContent.js'
import Footer from './components/Footer/Footer.js'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;

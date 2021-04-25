import React, {Component} from 'react'

import './App.css';

import Layout from './components/Layout/Layout'
import HeartMonitor from './containers/HeartMonitor/HeartMonitor';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
          <HeartMonitor />
        </Layout>
      </div>
    );
  }
}

export default App;

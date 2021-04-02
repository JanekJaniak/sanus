import React, {Component} from 'react';

import Aux from '../../src/hoc/Aux'

class HeartMonitor extends Component {
  render () {
    return (
      <Aux>
        <div>Measurment display</div>
        <div>Measurement controls</div>
      </Aux>

    );
  }
};

export default HeartMonitor;
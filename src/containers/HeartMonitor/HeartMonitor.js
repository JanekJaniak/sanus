import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import MeasureDisplay from '../../components/HeartMonitorComps/MeasureDisplay/MeasureDisplay'

class HeartMonitor extends Component {
  render () {
    return (
      <Aux>
        <MeasureDisplay />
        <div>Measurement controls</div>
      </Aux>

    );
  }
};

export default HeartMonitor;
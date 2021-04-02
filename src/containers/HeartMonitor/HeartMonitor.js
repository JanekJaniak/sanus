import React, {Component} from 'react';

import Aux from '../../hoc/Aux'; 
import MeasureDisplay from '../../components/HeartMonitorComps/MeasureDisplay/MeasureDisplay'

import styles from './heartMonitorStyles.module.css'

class HeartMonitor extends Component {
  constructor() {
    super()

    this.state = {
      heartData: [
        {
          id: 1,
          date: '',
          time: '7:00',
          systolic: '130',
          diastolic: '80',
          heartRate: '70',
          weight: '',
          position: '',
          arm: '',
          mood: 3,
        },
      ]
    }
  }
  render () {
    return (
      <Aux>
        <div className={styles.header}>
          <MeasureDisplay />
        </div>
        <MeasureDisplay />
        <div>Measurement controls</div>
      </Aux>
    )
  }
};

export default HeartMonitor;
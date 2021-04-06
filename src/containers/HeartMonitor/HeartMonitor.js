import React, {Component} from 'react';

import Aux from '../../hoc/Aux'; 
import MeasureDisplay from '../../components/HeartMonitorComps/MeasureDisplay/MeasureDisplay'
import Footer from '../../components/HeartMonitorComps/Footer/Footer'

import styles from './heartMonitorStyles.module.css'

class HeartMonitor extends Component {
  constructor() {
    super()

    this.state = {
      heartData: [
        {
          id: 1,
          date: '01.04.21',
          time: '7:00',
          systolic: '130',
          diastolic: '80',
          heartRate: '70',
          weight: '',
          position: '',
          arm: '',
          mood: 3,
        },
        {
          id: 2,
          date: '01.04.21',
          time: '9:00',
          systolic: '111',
          diastolic: '77',
          heartRate: '65',
          weight: '',
          position: '',
          arm: '',
          mood: 3,
        },
      ],
    }
  }

  MeasurementList = () => {
    const heartDataArr = this.state.heartData;
    
    return(
      <Aux>
        {heartDataArr.map(heartDataItm => (
          <MeasureDisplay key={heartDataItm.id} heartDataItm={heartDataItm}/>
        ))}
      </Aux>
    )
  }
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.measurementList}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.inner}>SYS</th>
                <th className={styles.inner}>DIA</th>
                <th className={styles.inner}>HR</th>
                <th>TIME</th>
              </tr>
            </tbody>
          </table>
          <div>{this.MeasurementList()}</div>
        </div>
        <Footer />
      </div>
    )
  }
};

export default HeartMonitor;
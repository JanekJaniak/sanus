import React, {Component} from 'react';

import Aux from '../../hoc/Aux'; 
import MeasureDisplay from '../../components/HeartMonitorComps/MeasureDisplay/MeasureDisplay'
import Footer from '../../components/HeartMonitorComps/Footer/Footer'
import Modal from '../../components/UI/Modal/Modal'
import AddNewMeasure from '../../components/HeartMonitorComps/AddNewMeasure/AddNewMeasure'

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
        },
        {
          id: 2,
          date: '01.04.21',
          time: '9:00',
          systolic: '111',
          diastolic: '77',
          heartRate: '65',
        },
      ],
      isNewMeasureOpen: false,
    }
  }

  measurementList = () => {
    const heartDataArr = this.state.heartData;
    
    return(
      <Aux>
        {heartDataArr.map(heartDataItm => (
          <MeasureDisplay key={heartDataItm.id} heartDataItm={heartDataItm}/>
        ))}
      </Aux>
    )
  }

  buttonHandler = (event) => {
    const buttonType = event.target.getAttribute('action')
    
    switch(buttonType) {
      case 'add':
        this.setState({isNewMeasureOpen: true});
      break;
      case 'graph':
        console.log('graph');
      break;
      case 'avg':
        console.log('avg');
      break;
      case 'submit':
        this.setState({isNewMeasureOpen: false});
      break;
      default:
        console.log('Error');
      break;
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <Modal show={this.state.isNewMeasureOpen}>
          <AddNewMeasure handler={this.buttonHandler}/>
        </Modal>
        <div className={styles.measurementList}>
          <table className={styles.tableHead}>
            <tbody>
              <tr>
                <th className={styles.inner}>SYS</th>
                <th className={styles.inner}>DIA</th>
                <th className={styles.inner}>HR</th>
                <th>TIME</th>
              </tr>
            </tbody>
          </table>
          <div>{this.measurementList()}</div>
        </div>
        <Footer handler={this.buttonHandler} />
      </div>
    )
  }
};

export default HeartMonitor;
import React, {Component} from 'react';

import Footer from '../../components/HeartMonitorComps/Footer/Footer'
import Modal from '../../components/UI/Modal/Modal'
import AddNewMeasure from '../../components/HeartMonitorComps/AddNewMeasure/AddNewMeasure'
import MeasureDisplay from '../../components/HeartMonitorComps/MeasureDisplay/MeasureDisplay'

import styles from './heartMonitorStyles.module.css'

class HeartMonitor extends Component {
  constructor() {
    super()

    this.state = {
      heartData: [
        {
          id: 1,
          date: '2021-04-01',
          time: '7:00',
          systolic: '130',
          diastolic: '80',
          heartRate: '70',
        },
        {
          id: 2,
          date: '2021-04-01',
          time: '9:00',
          systolic: '111',
          diastolic: '77',
          heartRate: '65',
        },
        {
          id: 3,
          date: '2021-02-01',
          time: '9:22',
          systolic: '121',
          diastolic: '67',
          heartRate: '58',
        },
      ],
      showModal: false,
    }
  }

  buttonHandler = (event) => {
    const buttonType = event.target.getAttribute('action')
    
    switch(buttonType) {
      case 'add':
        this.setState({showModal: true});
      break;
      case 'graph':
        console.log('graph');
      break;
      case 'avg':
        console.log('avg');
      break;
      default:
        console.log('Error');
      break;
    }
  }

  submitHandler = (data) => {
    this.setState({showModal: false});

    this.setState(state => {
      const heartData = state.heartData.concat(data);

      return {heartData}
    })
  }

  render () {
    return (
      <div className={styles.container}>
        <Modal show={this.state.showModal}>
          <AddNewMeasure handler={this.submitHandler}/>
        </Modal>
        <div className={styles.mainElement}>
          <MeasureDisplay props={this.state.heartData}/>
        </div>
        <Footer handler={this.buttonHandler} />
      </div>
    )
  }
};

export default HeartMonitor;
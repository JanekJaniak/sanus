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
          dateCreated: 1614866400000,
          date: '2021-03-04',
          time: '15:00',
          systolic: '130',
          diastolic: '80',
          heartRate: '70',
        },
        {
          id: 2,
          dateCreated: 1614837600000,
          date: '2021-03-04',
          time: '7:00',
          systolic: '111',
          diastolic: '77',
          heartRate: '65',
        },
        {
          id: 3,
          dateCreated: 1615834800000,
          date: '2021-03-15',
          time: '20:00',
          systolic: '121',
          diastolic: '67',
          heartRate: '55',
        },
        {
          id: 4,
          dateCreated: 1613412000000,
          date: '2021-02-15',
          time: '19:00',
          systolic: '100',
          diastolic: '55',
          heartRate: '67',
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
  cancelAddNew = () => {
    this.setState({showModal: false})
  }  

  render () {
    return (
      <div className={styles.container}>
        <Modal show={this.state.showModal}>
          <AddNewMeasure 
            handler={this.submitHandler}
            cancel={this.cancelAddNew}
          />
        </Modal>
        <div className={styles.mainElement}>
          <MeasureDisplay heartData={this.state.heartData}/>
        </div>
        <Footer handler={this.buttonHandler} />
      </div>
    )
  }
};

export default HeartMonitor;
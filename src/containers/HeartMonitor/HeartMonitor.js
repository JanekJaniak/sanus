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
      ],
      showModal: false,
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
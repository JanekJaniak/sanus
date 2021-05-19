import React, {Component} from 'react';

import Footer from '../../components/HeartMonitorComps/Footer/Footer'
import Modal from '../../components/UI/Modal/Modal'
import AddNewMeasure from '../../components/HeartMonitorComps/AddNewMeasure/AddNewMeasure'
import MeasureDisplay from '../../components/HeartMonitorComps/MeasureDisplay/MeasureDisplay'

import styles from './heartMonitorStyles.module.css'

import mockHeartData from '../../mocks/heartDataMock.json'

class HeartMonitor extends Component {
  constructor() {
    super()

    this.state = {
      heartData: [],
      showModal: false,
    }
  }

  componentDidMount() {
    const data = [...mockHeartData]
    this.setState({heartData:data})
    console.log();
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
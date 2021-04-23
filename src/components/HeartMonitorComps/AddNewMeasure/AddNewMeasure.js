import React, {Component} from 'react';

import styles from './addNMStyles.module.css'

import Input from '../../UI/Input/Input';
import Button from '../../HeartMonitorComps/Button/Button';

 class AddNewMeasure extends Component  {
  constructor() {
    super()

    this.state = {
      date: {
        elementType: 'input',
        elementConf: {
          type: 'date',
        },
        value: ''
      },
      time: {
        elementType: 'input',
        elementConf: {
          type: 'time',
        },
        value: ''
      },
      systolic: {
        elementType: 'input',
        elementConf: {
          type: 'number',
          placeholder: 'Systolic'
        },
        value: ''
      },
      diastolic:{
        elementType: 'input',
        elementConf: {
          type: 'number',
          placeholder: 'Diastolic'
        },
        value: ''
      },
      heartRate:{
        elementType: 'input',
        elementConf: {
          type: 'number',
          placeholder: 'Heart rate'
        },
        value: ''
      },
      notes: {
        elementType: 'textarea',
        elementConf: {
          type: 'textarea',
          rows: '3',
          placeholder: 'Your notes'
        },
        value: ''
      },
    }
  }

  componentDidMount() {
    // this.getStateDate();
    // this.getStateTime();
    // this.setId();
  }

  getStateDate = () => {
    const dateNow = new Date();
    const day = '' + dateNow.getDate();
    const dayNow = day.length < 2 ? '0' + day : day;
    const month = '' + (dateNow.getMonth() + 1);
    const monthNow = month.length < 2 ? '0' + month : month;
    
    const stateDate = [ dateNow.getFullYear(), monthNow, dayNow].join('-');

    this.setState({date: stateDate})
  }

  getStateTime = () => {
    const dateNow = new Date();
    const hour = '' + dateNow.getHours();
    const hourNow = hour.length < 2 ? '0' + hour : hour;
    const minutes = '' + dateNow.getMinutes();
    const minutesNow = minutes.length < 2 ? '0' + minutes : minutes;

    const stateTime = [hourNow, minutesNow].join(':');

    let time = this.state.time.value
    time = stateTime
   
    this.setState({time})
  }

  setId = () => {
    const newId = '_' + Math.random().toString(36).substr(2, 9);
    
    this.setState({id: newId})
  }

  inputHandler = (event) => {
    const dataType = event.target.getAttribute('statename')

    this.setState({[{dataType}.value]: event.target.value})
  }

  validateForm = (event) => {
    this.props.handler(event, this.state)
  }

  render() {
    const formElements = [];
    for ( let key in this.state) {
        formElements.push({
          id: key,
          config: this.state[key]
        })
    }

    return(
      <form className={styles.container}>
        {formElements.map(formElement => (
          <Input
            elementType={formElement.config.elementType} 
            elementConf={formElement.config.elementConf} 
            value={formElement.config.value}
          />  
        ))}
        <div className={styles.buttonContainer}>
          <Button
            name='Submit'
            action='submit'
            handler={this.validateForm}
          />
        </div>
      </form>
    )
  }
};

export default AddNewMeasure
import React, {Component} from 'react';

import styles from './addNMStyles.module.css'

import Input from '../../UI/Input/Input';
import Button from '../../HeartMonitorComps/Button/Button';

 class AddNewMeasure extends Component  {
  constructor() {
    super()

    this.state = {
      id: '',
      date: '',
      time: '',
      systolic: {
        value: '',
        valid: ''
      },
      diastolic: {
        value: '',
        valid: ''
      },
      heartRate: {
        value: '',
        valid: ''
      },
      notes: {
        value: ''
      }
    }
  }

  componentDidMount() {
    this.getStateDate();
    this.getStateTime();
    this.setId();
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
   
    this.setState({time: stateTime})
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
    return(
      <div className={styles.container}>
        <Input 
          label='Date' 
          inputtype='input' 
          type ='date'
          statename='date'
          value={this.state.date}
          onChange={this.inputHandler}
        />  
        <Input 
          label='Time' 
          inputtype='input' 
          type ='time'
          statename='time'
          value={this.state.time}
          onChange={this.inputHandler}
        />
        <Input 
          label='SYS' 
          inputtype='input' 
          type ='number'
          statename='systolic'
          value={this.state.systolic}
          onChange={this.inputHandler}
        />
        <Input 
          label='DIA' 
          inputtype='input'  
          type ='number'
          statename='diastolic'
          value={this.state.diastolic}
          onChange={this.inputHandler}
        />
        <Input 
          label='HR' 
          inputtype='input' 
          type ='number'
          statename='heartRate'
          value={this.state.heartRate}
          onChange={this.inputHandler}
        />
        <Input 
          label='Notes' 
          inputtype='textarea'
          statename='notes'
          value={this.state.notes}
          onChange={this.inputHandler }
          />
        <div className={styles.buttonContainer}>
          <Button
            name='Submit'
            action='submit'
            handler={this.validateForm}
          />
        </div>
      </div>
    )
  }
};

export default AddNewMeasure
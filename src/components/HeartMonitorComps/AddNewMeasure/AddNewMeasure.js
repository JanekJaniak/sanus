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
      systolic: '',
      diastolic: '',
      heartRate: '',
      notes: ''
    }
  }

  componentDidMount() {
    this.getStateDate();
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

  inputHandler = (event) => {
    console.log(event.target.value);
  }

  render() {
    return(
      <div className={styles.container}>
        <Input 
          label='Date' 
          inputtype='input' 
          type ='date'
          value={this.date}
          onChange={this.inputHandler}
        />  
        <Input label='Time' inputtype='input' type ='time'/>
        <Input label='SYS' inputtype='input' type ='number'/>
        <Input label='DIA' inputtype='input' type ='number'/>
        <Input label='HR' inputtype='input' type ='number'/>
        <Input label='Notes' inputtype='textarea'/>
        <div className={styles.buttonContainer}>
          <Button
            name='Submit'
            action='submit'
            handler={this.props.handler}
          />
        </div>
      </div>
    )
  }
};

export default AddNewMeasure
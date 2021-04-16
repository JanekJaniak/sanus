import React, {Component} from 'react';

import styles from './addNMStyles.module.css'

import Input from '../../UI/Input/Input';
import Button from '../../HeartMonitorComps/Button/Button';

 class AddNewMeasure extends Component  {
  constructor() {
    super()

    this.state = {
      id: 1,
      date: '01.04.21',
      time: '7:00',
      systolic: '130',
      diastolic: '80',
      heartRate: '70',
    }
  }

  render() {
    return(
      <div className={styles.container}>
        <Input label='Date' inputtype='input' type ='date'/>  
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
import React from 'react';

import styles from './addNMStyles.module.css'

import Input from '../../UI/Input/Input';
import Button from '../../HeartMonitorComps/Button/Button';

const addNewMeasure = (props) => {

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
          handler={props.handler}
        />
      </div>
    </div>
  )
};

export default addNewMeasure
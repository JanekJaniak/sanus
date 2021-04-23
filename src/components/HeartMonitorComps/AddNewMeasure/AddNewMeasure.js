import React, {Component} from 'react';

import styles from './addNMStyles.module.css'

import Input from '../../UI/Input/Input';
import Button from '../../HeartMonitorComps/Button/Button';

 class AddNewMeasure extends Component  {
  constructor() {
    super()

    this.state = {
      form: {
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
        }
      }
    }
  }

  componentDidMount() {
    // this.getStateDate();
    // this.getStateTime();
  }

  getStateDate = () => {
    const dateNow = new Date();
    const day = '' + dateNow.getDate();
    const dayNow = day.length < 2 ? '0' + day : day;
    const month = '' + (dateNow.getMonth() + 1);
    const monthNow = month.length < 2 ? '0' + month : month;
    const stateDate = [ dateNow.getFullYear(), monthNow, dayNow].join('-');
    

    this.initialInputHandler(stateDate, 'date')
  }

  getStateTime = () => {
    const dateNow = new Date();
    const hour = '' + dateNow.getHours();
    const hourNow = hour.length < 2 ? '0' + hour : hour;
    const minutes = '' + dateNow.getMinutes();
    const minutesNow = minutes.length < 2 ? '0' + minutes : minutes;
    const stateTime = [hourNow, minutesNow].join(':');

    this.initialInputHandler(stateTime, 'time')
  }

  inputHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement =  {
      ...updatedForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier] = updatedFormElement;

    this.setState({form: updatedForm});
  }

  initialInputHandler = (value, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement =  {
      ...updatedForm[inputIdentifier]
    };

    updatedFormElement.value = value;
    updatedForm[inputIdentifier] = updatedFormElement;

    this.setState({form: updatedForm});
  }

  submitForm = () => {
    console.log('Submit');
  }


  render() {
    const formElements = [];
    for ( let key in this.state.form) {
      formElements.push({
        id: key,
        config: this.state.form[key]
      })
    }

    return(
      <form className={styles.container}>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType} 
            elementConf={formElement.config.elementConf} 
            value={formElement.config.value}
            change={(event) => this.inputHandler(event, formElement.id)}
          />  
        ))}
        <div className={styles.buttonContainer}>
          <Button
            name='Submit'
            action='submit'
            handler={this.submitForm}
          />
        </div>
      </form>
    )
  }
};

export default AddNewMeasure
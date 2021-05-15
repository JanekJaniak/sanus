import React, {Component} from 'react';

import styles from './addNMStyles.module.css'

import Input from '../../UI/Input/Input';
import Button from '../../HeartMonitorComps/Button/Button';

 class AddNewMeasure extends Component  {
  constructor() {
    super();

    this.state = {
      dateCreated: '',
      dateCreatedEdited: true,
      form: {
        date: {
          elementType: 'input',
          elementConf: {
            type: 'date',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          isTouched: false
        },
        time: {
          elementType: 'input',
          elementConf: {
            type: 'time',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          isTouched: false
        },
        systolic: {
          elementType: 'input',
          elementConf: {
            type: 'number',
            placeholder: 'Systolic'
          },
          value: '',
          validation: {
            required: true,
            minLength: 2,
            maxLenght: 3,
            minValue: 50,
            maxValue: 260
          },
          valid: false,
          isTouched: false
        },
        diastolic: {
          elementType: 'input',
          elementConf: {
            type: 'number',
            placeholder: 'Diastolic'
          },
          value: '',
          validation: {
            required: true,
            minLength: 2,
            maxLenght: 3,
            minValue: 30,
            maxValue: 200
          },
          valid: false,
          isTouched: false
        },
        heartRate: {
          elementType: 'input',
          elementConf: {
            type: 'number',
            placeholder: 'Heart rate'
          },
          value: '',
          validation: {
            required: true,
            minLength: 2,
            maxLenght: 3,
            minValue: 30,
            maxValue: 260
          },
          valid: false,
          isTouched: false
        },
        notes: {
          elementType: 'textarea',
          elementConf: {
            type: 'textarea',
            rows: '3',
            placeholder: 'Your notes'
          },
          value: '',
          validation: {
            required: false
          },
          valid: true
        }
      }
    }
  }

  componentDidMount() {
    this.setDateTimeCreated();
  }

  setDateTimeCreated = () => {
    const dateNow = new Date();
    const day = '' + dateNow.getDate();
    const dayNow = day.length < 2 ? '0' + day : day;
    const month = '' + (dateNow.getMonth() + 1);
    const monthNow = month.length < 2 ? '0' + month : month;
    const stateDate = [ dateNow.getFullYear(), monthNow, dayNow].join('-');
    
    const hour = '' + dateNow.getHours();
    const hourNow = hour.length < 2 ? '0' + hour : hour;
    const minutes = '' + dateNow.getMinutes();
    const minutesNow = minutes.length < 2 ? '0' + minutes : minutes;
    const stateTime = [hourNow, minutesNow].join(':');
    
    this.setState(prevState => ({
      form: {
        ...prevState.form,
        date: {
          ...prevState.form.date,
          value: stateDate,
          valid: true
        },
        time: {
          ...prevState.form.time,
          value: stateTime,
          valid: true
        }
      }
    }))

    this.setState({dateCreated: dateNow})
  }

  inputHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement =  {
      ...updatedForm[inputIdentifier]
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value, updatedFormElement.validation
    )
    updatedFormElement.isTouched = true
    updatedForm[inputIdentifier] = updatedFormElement;

    if(inputIdentifier === 'date' || inputIdentifier === 'time') {
      this.setState({dateCreatedEdited: true})
    }

    this.setState({form: updatedForm});
  }

  submitHandler = (event) => {
    event.preventDefault();
    
    const formData = {};
    for(let formElementIdentifier in this.state.form) {
      formData[formElementIdentifier] = this.state.form[formElementIdentifier]
    };
    
    const validFormElements = [];
    const formElements =[];
    let isFormValid = false;

    for(let formElementIdentifier in this.state.form) {
      this.setState(prevState => ({
        form: {
          ...prevState.form,
          [formElementIdentifier] : {
            ...prevState.form[formElementIdentifier],
            isTouched:  true
          }
        }
      }))
      
      if(this.state.form[formElementIdentifier].valid === true ) {
        validFormElements.push(1)
      } 
      formElements.push(1)
    };

    if(formElements.length === validFormElements.length) {
      isFormValid = true;
    };
      
    if(this.state.dateCreatedEdited === true) {
      const date = this.state.form.date.value.replaceAll('-', ',');
      const hours = this.state.form.time.value.slice(0,2);
      const minutes = this.state.form.time.value.slice(-2)
      const dateEdited = new Date(date);

      dateEdited.setHours(hours);
      dateEdited.setMinutes(minutes);

      this.setState({dateCreated: dateEdited})
    }

    const exportData = {
      id:  '_' + Math.random().toString(36).substr(2, 9),
      dateCreated: this.state.dateCreated,
      date: formData.date.value,
      time: formData.time.value,
      systolic: formData.systolic.value,
      diastolic: formData.diastolic.value,
      heartRate: formData.heartRate.value,
      notes: formData.notes.value
    };

    if(isFormValid) {
      this.props.handler(exportData);
    };
  }

  checkValidity = (value, rules) => {
    let isValid = true;

    if(rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if(rules.maxLenght) {
      isValid = value.length <= rules.maxLenght && isValid
    }

    if(rules.minValue) {
      isValid = value >= rules.minValue && isValid
    }

    if(rules.maxValue) {
      isValid = value <= rules.maxValue && isValid
    }

    return isValid;
  }

  render() {
    const formElements = [];
    for ( let key in this.state.form) {
      formElements.push({
        id: key,
        config: this.state.form[key]
      })
    };

    return(
      <form 
        className = {styles.container}
        onSubmit = {this.submitHandler}
      >
        {formElements.map(formElement => (
          <Input
            key = {formElement.id}
            elementType = {formElement.config.elementType} 
            elementConf = {formElement.config.elementConf} 
            value = {formElement.config.value}
            invalid = {formElement.config.valid}
            isTouched = {formElement.config.isTouched}
            change = {(event) => this.inputHandler(event, formElement.id)}
          />  
        ))}
        <div className = {styles.buttonContainer}>
          <Button
            name = 'Submit'
            action = 'submit'
          />
        </div>
      </form>
    )
  }
};

export default AddNewMeasure;
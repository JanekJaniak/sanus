import React from 'react'

import styles from './inputStyles.css'

const input = (props) => {
  let inputElement = null;

  switch(props.inputtype) {
    case 'input':
      inputElement = <input {...props}/>;
      break;
    case 'textarea':
      inputElement = <textarea {...props}/>;
      break;
    default:
      inputElement = <input {...props}/>;
  }
 
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
      
    </div>
  )
};

export default input
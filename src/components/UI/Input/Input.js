import React from 'react'

import styles from './inputStyles.module.css'

const input = (props) => {
  let inputElement = null;

  switch(props.inputtype) {
    case 'input':
      inputElement = <input className={styles.input} {...props}/>;
      break;
    case 'textarea':
      inputElement = <textarea className={styles.textArea}{...props}/>;
      break;
    default:
      inputElement = <input className={styles.input}{...props}/>;
  }
 
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      {inputElement}
      
    </div>
  )
};

export default input
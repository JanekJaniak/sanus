import React from 'react'

import styles from './inputStyles.module.css'

const input = (props) => {
  let inputElement = null;

  switch(props.elementType) {
    case 'input':
      inputElement = <input 
        className={styles.input} 
        {...props.elementConf}
        value={props.value}
      />;
      break;
    case 'textarea':
      inputElement = <textarea 
        className={styles.textArea}
        {...props.elementConf}
        value={props.value}
      />;
      break;
    default:
      inputElement = <input 
        className={styles.input}
        {...props.elementConf}
        value={props.value}
      />;
  }
 
  return (
    <div className={styles.container}>
      {inputElement}
    </div>
  )
};

export default input
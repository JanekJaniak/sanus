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
        onChange={props.change}
      />;
      break;
    case 'textarea':
      inputElement = <textarea 
        className={styles.textArea}
        {...props.elementConf}
        value={props.value}
        onChange={props.change}
      />;
      break;
    default:
      inputElement = <input 
        className={styles.input}
        {...props.elementConf}
        value={props.value}
        onChange={props.change}
      />;
  }
 
  return (
    <div className={styles.container}>
      {inputElement}
    </div>
  )
};

export default input
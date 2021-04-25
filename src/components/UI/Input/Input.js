import React from 'react'

import styles from './inputStyles.module.css'

const input = (props) => {
  let inputElement = null;

  const inputStyles = [
    styles.input
  ];

  const textareaStyles = [
    styles.textArea
  ]

  if(!props.invalid && props.isTouched) {
    inputStyles.push(styles.invalid);
    textareaStyles.push(styles.invalid);
  }

  switch(props.elementType) {
    case 'input':
      inputElement = <input 
        className={inputStyles.join(' ')} 
        {...props.elementConf}
        value={props.value}
        onChange={props.change}
      />;
      break;
    case 'textarea':
      inputElement = <textarea 
        className={textareaStyles.join(' ')}
        {...props.elementConf}
        value={props.value}
        onChange={props.change}
      />;
      break;
    default:
      inputElement = <input 
        className={inputStyles.join(' ')}
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
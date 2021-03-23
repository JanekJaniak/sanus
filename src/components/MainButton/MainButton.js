import React from 'react'

import styles from './mainButtonStyles.module.css'

function Button(props) {
  function buttonHandler(type) {
    console.log('click', type);
  }

  return(
    <button 
      className={styles.button}
      onClick={() => buttonHandler(props.type)}
    >{props.text}
    </button>
  )
}

export default Button

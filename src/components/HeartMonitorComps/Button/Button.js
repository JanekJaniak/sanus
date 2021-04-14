import React from 'react'

import styles from './buttonStyles.module.css'

const Button = (props) => {
  return(
    <button
      className={styles.button} 
      action={props.action}
      onClick={props.handler}
    >{props.name}</button>
  )
}

export default Button
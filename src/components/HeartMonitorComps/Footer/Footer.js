import React from 'react'

import Button from '../Button/Button'

import styles from './footerStyles.module.css'

const Footer = () => {
  return(
    <div className={styles.footer}>
      <Button name='+'/>
      <Button name='Graph'/>
      <Button name='Med'/>
    </div>
  )
}

export default Footer
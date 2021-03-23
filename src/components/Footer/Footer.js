import React, {Component} from 'react'

import styles from './footerStyles.module.css'

import Button from '../MainButton/MainButton.js'

class Footer extends Component {
  render() {
    return(
      <div className={styles.container}>
        <Button 
          type='addMesurement'
          text='+'
        />
        <Button 
          type='chart'
          text='Chart'  
        />
    </div>
    )
  }
}

export default Footer
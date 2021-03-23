import React, {Component} from 'react'

import styles from './mainContentStyles.module.css'

import Button from '../MainButton/MainButton.js'

class MainContent extends Component {
  render() {
    return(
      <div className={styles.container}>
        <Button 
          type='addMesurement'
          text='New data'
        />
        <Button 
          type='chart'
          text='View chart'  
        />
      </div>
    )
  }
}

export default MainContent
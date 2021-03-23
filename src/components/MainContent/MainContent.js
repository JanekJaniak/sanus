import React, {Component} from 'react'

import styles from './mainContentStyles.module.css'

import NewMeasure from '../NewMesurement/NewMeasure.js'
class MainContent extends Component {
  render() {
    return(
      <div className={styles.container}>
       <NewMeasure />
      </div>
    )
  }
}

export default MainContent
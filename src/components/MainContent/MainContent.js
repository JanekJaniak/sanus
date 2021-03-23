import React, {Component} from 'react'

import styles from './mainContentStyles.module.css'

import Button from '../MainButton/MainButton.js'

class MainContent extends Component {
  render() {
    return(
      <div className={styles.container}>
        <Button />
      </div>
    )
  }
}

export default MainContent
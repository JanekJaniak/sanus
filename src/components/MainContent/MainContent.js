import React, {Component} from 'react'

import styles from './mainContentStyles.module.css'

import Footer from '../Footer/Footer.js'
import NewMeasure from '../NewMesurement/NewMeasure.js'
class MainContent extends Component {
  render() {
    return(
      <div className={styles.container}>
        <NewMeasure
          className={styles.newMeasure}
        />
       <Footer />
      </div>
    )
  }
}

export default MainContent
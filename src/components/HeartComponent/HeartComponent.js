import React, {Component} from 'react'

import styles from './heartComponentStyles.module.css'

import Footer from '../Footer/Footer.js'
import NewMeasure from '../NewMesurement/NewMeasure.js'

class HeartComponent extends Component {
  constructor() {
    super()

    this.state ={
      measurements: []
    }
  }
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

export default HeartComponent
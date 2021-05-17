import React, {Component} from 'react';

import Aux from '../../../../hoc/Aux'; 

import styles from './dcStyles.module.css'

class DisplayComponent extends Component {

  render() {
    return (
      <Aux>
        <div className={styles.dateContainer}>
          <p className={styles.date}>{this.props.heartDataItem.date}</p>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th className={styles.inner}>{this.props.heartDataItem.systolic}</th>
              <th className={styles.inner}>{this.props.heartDataItem.diastolic}</th>
              <th className={styles.inner}>{this.props.heartDataItem.heartRate}</th>
              <th>{this.props.heartDataItem.time}</th>
            </tr>
          </tbody>
        </table>
      </Aux>
    )
  }  
}

export default DisplayComponent;
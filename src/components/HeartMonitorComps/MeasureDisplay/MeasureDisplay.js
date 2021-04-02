import React from 'react';

import Aux from '../../../hoc/Aux'; 

import styles from './mdStyles.module.css'

const measureDisplay = (props) => {
  const heartData = {...props.measureData}

  return (
    <Aux>
      <div className={styles.dateContainer}>
        <p>{heartData.date}</p>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.inner}>{heartData.systolic}</th>
            <th className={styles.inner}>{heartData.diastolic}</th>
            <th className={styles.inner}>{heartData.heartRate}</th>
            <th>{heartData.time}</th>
          </tr>
        </tbody>
      </table>
    </Aux>
  )
};

export default measureDisplay;
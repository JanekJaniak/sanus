import React from 'react';

import Aux from '../../../hoc/Aux'; 

import styles from './mdStyles.module.css'

const measureDisplay = (props) => {
  return (
    <Aux>
      <div className={styles.dateContainer}>
        <p>01.04.21</p>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.inner}>120</th>
            <th className={styles.inner}>80</th>
            <th className={styles.inner}>70</th>
            <th>7:00</th>
          </tr>
        </tbody>
      </table>
    </Aux>
  )
};

export default measureDisplay;
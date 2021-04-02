import React from 'react';

import styles from './mdStyles.module.css'

const measureDisplay = (props) => {
  return (
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
  )
};

export default measureDisplay;
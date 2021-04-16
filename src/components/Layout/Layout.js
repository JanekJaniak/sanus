import React from 'react'

import Aux from '../../hoc/Aux';

import styles from './layoutStyles.module.css'

const layout = (props) => (
  <Aux>
    <div className={styles.header}>Toolbar</div>
    <main className={styles.mainContent}>
      {props.children}
    </main>
  </Aux>
);

export default layout
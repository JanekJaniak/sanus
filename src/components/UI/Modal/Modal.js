import React from 'react';

import styles from './modalStyles.module.css';

const modal = (props) => (
  <div 
    className={styles.modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
    }}
  >
    {props.children}
  </div>
);

export default modal
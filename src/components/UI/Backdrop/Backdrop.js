import React from 'react';

import styles from './backdropStyles.module.css';

const backdrop = (props) => (
  props.show ? <div className={styles.backdrop}></div> : null
);

export default backdrop;
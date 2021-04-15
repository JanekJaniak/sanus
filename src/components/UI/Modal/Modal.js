import React from 'react';

import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

import styles from './modalStyles.module.css';

const modal = (props) => (
  <Aux>
    <div 
      className={styles.modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'
      }}
    >
      {props.children}
    </div>
    <Backdrop show={props.show}/>
  </Aux>
);

export default modal
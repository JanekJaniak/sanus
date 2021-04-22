import React, {Component} from 'react';

import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

import styles from './modalStyles.module.css';

class Modal extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <Aux>
        <div 
          className={styles.modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)'
          }}
        >
          {this.props.children}
        </div>
        <Backdrop show={this.props.show}/>
      </Aux>
    )
  }
};


export default Modal
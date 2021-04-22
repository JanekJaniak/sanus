import React, {Component} from 'react';

import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

import styles from './modalStyles.module.css';

class Modal extends Component {
  constructor() {
    super()
  }

  render() {
    if(!this.props.show) {
      return null;
    }
    return(
      <Aux>
        <div className={styles.modal}>
          {this.props.children}
        </div>
        <Backdrop show={this.props.show}/>
      </Aux>
    )
  }
};

export default Modal
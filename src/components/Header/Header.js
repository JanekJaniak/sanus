import React, { Component } from 'react'

import styles from './headerStyles.module.css'

class Header extends Component {
  render() {
    return(
      <div className={styles.header}>
        <h2 className={styles.headerText}>Stay healthy!</h2>
      </div>
    )
  }
}

export default Header
import React from 'react';

import Button from '../Button/Button';

import styles from './footerStyles.module.css';

const buttons = [
  {name: 'Add', action: 'add'},
  {name: 'Graph',action: 'graph'},
  {name: 'Avg',action: 'avg'}
];

const Footer = (props) => {
  return(
    <div className={styles.footer}>
      {buttons.map(button => (
        <Button 
          name={button.name} 
          action={button.action}
          key={button.action}
          handler={props.handler}
        />))}
    </div>
  )
};

export default Footer
import React from 'react';

import Button from '../Button/Button';

import styles from './footerStyles.module.css';

const buttons = [
  {name: 'Add', type: 'add'},
  {name: 'Graph', type: 'graph'},
  {name: 'Avg', type: 'avg'}
];

const Footer = (props) => {
  return(
    <div className={styles.footer}>
      {buttons.map(button => (
        <Button 
          name={button.name} 
          type={button.type}
          key={button.type}
          handler={props.handler}
        />))}
    </div>
  )
};

export default Footer
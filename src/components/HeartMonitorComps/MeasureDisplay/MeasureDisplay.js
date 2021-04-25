import React from 'react';

import Aux from '../../../hoc/Aux'; 

import styles from './mdStyles.module.css'

const measureDisplay = (props) => {
  const heartData = {...props.heartDataItm}

const  measurementList = () => {
    const heartDataArr = this.state.heartData;
    
    return(
      <Aux>
        {/* {heartDataArr.map(heartDataItm => (
          <MeasureDisplay key={heartDataItm.id} heartDataItm={heartDataItm}/>
        ))} */}
         <div className={styles.measurementList}>
          <table className={styles.tableHead}>
            <tbody>
              <tr>
                <th className={styles.inner}>SYS</th>
                <th className={styles.inner}>DIA</th>
                <th className={styles.inner}>HR</th>
                <th>TIME</th>
              </tr>
            </tbody>
          </table>
          <div>{this.measurementList()}</div>
        </div> 
      </Aux>
    )
  }

  return (
    <Aux>
      
    </Aux>
  )
};

export default measureDisplay;
import React, {Component} from 'react'

import styles from './mdStyles.module.css'

import DisplayComponent from './DisplayComponent/DisplayComponent'

class MeasureDisplay extends Component {
  componentDidMount() {
    this.sortHeartData()
  }

  sortHeartData = () => {
    const heartData = [...this.props.heartData];

    heartData.sort((a,b) => {
      return a.dateCreated - b.dateCreated;
    })
    return(
    <div>
      {heartData.map(heartDataItem => (
        <DisplayComponent key={heartDataItem.id} heartDataItem={heartDataItem}></DisplayComponent>
      ))}
    </div>  
    )
   }
 
  render() {
    return(
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
      <div>{this.sortHeartData()}</div>
    </div>
    )
  }
}

export default MeasureDisplay;

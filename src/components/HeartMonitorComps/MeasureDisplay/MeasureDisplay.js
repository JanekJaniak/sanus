import React, {Component} from 'react'

import styles from './mdStyles.module.css'

class MeasureDisplay extends Component {
  componentDidMount() {
    this.sortHeartData()
  }

  sortHeartData = () => {
    const heartData = [...this.props.heartData];

    heartData.sort((a,b) => {
      return a.dateCreated - b.dateCreated;
    })
    
   }
 
  render() {
    return(
      <div>
        <p>Display</p>
      </div>
    )
  }
}

export default MeasureDisplay;

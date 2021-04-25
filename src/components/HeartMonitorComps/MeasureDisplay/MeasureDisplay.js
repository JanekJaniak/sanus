import React, {Component} from 'react'

import styles from './mdStyles.module.css'

class MeasureDisplay extends Component {
  componentDidMount() {
    this.sortedHeartData()
  }

  sortedHeartData = () => {
    const heartData = [...this.props.heartData];
    const sortedHeartData = [];
    
    console.log(heartData);
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

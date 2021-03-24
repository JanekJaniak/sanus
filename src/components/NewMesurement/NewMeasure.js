import React, {Component} from 'react'

import styles from './newMeasureStyles.module.css'

class NewMeasure extends Component {
  constructor() {
    super()

    this.state ={
      systolic: '',
      diastolic: '',
      heartRate: '',
      weight: '',
      position: '',
      arm: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.getAttribute('inputtype')]: event.target.value
    })
  }

  render() {
    return(
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles['form-input']}>
            <label>Data: </label>
            <input type='datetime-local' />
          </div>
          <div className={styles['form-input']}>
            <label>Skurczowe: </label>
            <input 
              type='number'
              value={this.state.systolic}
              onChange={this.handleInput}
              inputtype='systolic'
            />
          </div>
          <div className={styles['form-input']}>
            <label>Rozkurczowe: </label>
            <input 
              type='number'
              value={this.state.diastolic}
              onChange={this.handleInput}
              inputtype='diastolic'
            />
          </div>
          <div className={styles['form-input']}>
            <label>Tętno: </label>
            <input 
              type='number'
              value={this.state.heartRate}
              onChange={this.handleInput}
              inputtype='heartRate'
            />
          </div>
          <div className={styles['form-input']}>
            <label>Waga: </label>
            <input 
              type='number'
              value={this.state.weight}
              onChange={this.handleInput}
              inputtype='weight'
            />
          </div>
          <div className={styles['form-input']}>
            <label>Pozycja: </label>
            <select
              value={this.state.position}
              onChange={this.handleInput}
              inputtype='position'
            >
                <option value='sitting'>Siedząca</option>
                <option value='lying'>Leżąca</option>
            </select>
          </div>
          <div className={styles['form-input']}>
            <label>Ręka: </label>
            <select
              value={this.state.arm}
              onChange={this.handleInput}
              inputtype='arm'
            >
                <option value='left'>Lewa</option>
                <option value='right'>Prawa</option>
            </select>
          </div>
          <div className={styles['form-input']}>
            <label>Notatki: </label>
            <textarea 
              value={this.state.notes}
              onChange={this.handleInput}
              inputtype='notes'
          ></textarea>
        </div>
        </form>
      </div>
    )
  }
}

export default NewMeasure
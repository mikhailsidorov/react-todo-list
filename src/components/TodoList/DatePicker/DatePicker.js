import React, { Component } from 'react'

import styles from './DatePicker.module.css'

class DatePicker extends Component {
  onFirstDateChangeHandler = event => {
    this.props.updateFirstDate(event.target.value)
  }
  onLastDateChangeHandler = event => {
    this.props.updateLastDate(event.target.value)
  }

  render() {
    return (
      <div className={styles.datePicker}>
        <input type="date" onChange={this.onFirstDateChangeHandler} />
        <input type="date" onChange={this.onLastDateChangeHandler} />
      </div>
    )
  }
}

export default DatePicker

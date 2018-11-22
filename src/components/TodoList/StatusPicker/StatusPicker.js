import React, { Component } from 'react'

import { updateObject } from '../../shared/utility'
import styles from './StatusPicker.module.css'

class StatusPicker extends Component {
  state = {
    done: true,
    notDone: true
  }

  onDoneChangeHandler = event => {
    const status = event.target.checked
    this.setState(state => {
      const newState = updateObject(state, { done: status })
      this.props.updateStatus(newState)
      return newState
    })
  }

  onNotDoneChangeHandler = event => {
    const status = event.target.checked
    this.setState(state => {
      const newState = updateObject(state, { notDone: status })
      this.props.updateStatus(newState)
      return newState
    })
  }

  render() {
    return (
      <div className={styles.statusPicker}>
        <label htmlFor="done">Done</label>
        <input id="done" type="checkbox" onChange={this.onDoneChangeHandler} checked={this.state.done} />
        <label htmlFor="notDone">Not done</label>
        <input id="notDone" type="checkbox" onChange={this.onNotDoneChangeHandler} checked={this.state.notDone} />
      </div>
    )
  }
}

export default StatusPicker

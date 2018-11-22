import React, { Component } from 'react'

import { TodoListContext } from '../../../../contexts'
import styles from './X.module.css'


class X extends Component {
  static contextType = TodoListContext
  onClickHandler = (event) => {
    event.stopPropagation()
    this.context.deleteItem(this.props.itemId)
  }

  render() {
    return <div className={styles.x} onClick={this.onClickHandler} />
  }
}

export default X
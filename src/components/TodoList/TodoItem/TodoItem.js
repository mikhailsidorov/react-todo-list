import React, { Component } from 'react'

import styles from './TodoItem.module.css'

class TodoItem extends Component {
  state = {
    cursorOver: false
  }

  render() {
    const title = !this.props.data.isDone ? (
      <h3 className={styles.todoItem_title}>{this.props.data.title}</h3>
    ) : (
      <del>
        <h3 className={styles.todoItem_title}>{this.props.data.title}</h3>
      </del>
    )

    return (
      <div className={styles.todoItem}>
        {title}
        <div className={styles.todoItem_text}>{this.props.data.text}</div>
        <div className={styles.todoItem_createdAt}>{this.props.data.createdAt.toString()}</div>
      </div>
    )
  }
}

export default TodoItem

import React, { Component } from 'react'

import X from './X/X'
import TodoTitle from './TodoTitle/TodoTitle'
import TodoText from './TodoText/TodoText'
import styles from './TodoItem.module.css'

class TodoItem extends Component {
  state = {
    showX: false
  }

  onclickHandler = () => {
    this.props.switchItemStatus(this.props.data.id)
  }

  onMouseEnterHandler = () => {
    this.setState({ showX: true })
  }

  onMouseLeaveHandler = () => {
    this.setState({ showX: false })
  }

  render() {
    const datetime = this.props.data.createdAt
    const dateString = datetime.getDate() + '-' + (datetime.getMonth() + 1) + '-' + datetime.getFullYear()
    const currentStyle = this.props.data.isDone
      ? [styles.todoItem, styles.todoItem_compleated].join(' ')
      : styles.todoItem
    const x = this.state.showX ? <X itemId={this.props.data.id} /> : null

    return (
      <div
        className={currentStyle}
        onClick={this.onclickHandler}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <TodoTitle title={this.props.data.title} itemId={this.props.data.id} />
        <TodoText text={this.props.data.text} itemId={this.props.data.id} />
        <div className={styles.todoItem__createdAt}>{dateString}</div>
        {x}
      </div>
    )
  }
}

export default TodoItem

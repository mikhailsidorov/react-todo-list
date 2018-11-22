import React, { Component, Fragment } from 'react'

import EditField from '../EditField/EditField'
import styles from './TodoTitle.module.css'

class TodoTitle extends Component {
  state = {
    editable: false
  }

  onClickHandler = event => {
    event.stopPropagation()
    this.setState({ editable: true })
  }

  stopEdit = event => {
    this.setState({ editable: false })
  }

  render() {
    const content = this.state.editable ? (
      <EditField
        show={this.state.editable}
        stopEdit={this.stopEdit}
        value={this.props.title}
        itemId={this.props.itemId}
        type="title"
      />
    ) : (
      <h3 className={styles.todoTitle} onClick={this.onClickHandler} contentEditable={this.state.editable}>
        {this.props.title}
      </h3>
    )
    return <Fragment>{content}</Fragment>
  }
}

export default TodoTitle

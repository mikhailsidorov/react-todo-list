import React, { Component, Fragment } from 'react'

import EditField from '../EditField/EditField'
import styles from './TodoText.module.css'

class TodoText extends Component {
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
        value={this.props.text}
        itemId={this.props.itemId}
        type="body"
      />
    ) : (
      <div className={styles.todoText} onClick={this.onClickHandler} contentEditable={this.state.editable}>
        {this.props.text}
      </div>
    )
    return <Fragment>{content}</Fragment>
  }
}

export default TodoText

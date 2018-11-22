import React, { Component } from 'react'

import { TodoListContext } from '../../../../contexts'
import styles from './EditField.module.css'

class EditField extends Component {
  constructor(props) {
    super(props)
    this.textInput = null
    this.setTextInputRef = element => {
      this.textInput = element
    }
    this.state = {
      inputValue: ''
    }
  }

  static contextType = TodoListContext

  componentDidMount() {
    this.focusTextInput()
    if (this.props.value !== this.state.inputValue) {
      this.setState({ inputValue: this.props.value })
    }
  }

  focusTextInput = () => {
    if (this.textInput) this.textInput.focus()
  }

  blurTextInput = () => {
    if (this.textInput) this.textInput.blur()
  }

  onBlurHandler = event => {
    this.props.stopEdit()
  }

  onClickHandler = event => {
    event.stopPropagation()
  }

  onChangeHandler = event => {
    this.setState({ inputValue: event.target.value })
  }

  onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      this.context.updateTextItem(this.props.itemId, event.target.value, this.props.type)
      this.blurTextInput()
    }
  }

  onKeyDownHandler = event => {
    if (event.key === 'Escape') {
      this.blurTextInput()
    }
  }

  render() {
    return (
      <input
        type="text"
        className={styles.editField}
        onBlur={this.onBlurHandler}
        onClick={this.onClickHandler}
        ref={this.setTextInputRef}
        value={this.state.inputValue}
        onKeyPress={this.onKeyPressHandler}
        onChange={this.onChangeHandler}
        onKeyDown={this.onKeyDownHandler}
      />
    )
  }
}

export default EditField

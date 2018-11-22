import React, { Component, Fragment } from 'react'

import { TodoListContext } from '../../../../contexts'
import { updateObject } from '../../../shared/utility'
import styles from './ItemForm.module.css'

class Itemform extends Component {
  constructor(props) {
    super(props)

    this.titleInput = null
    this.bodyInput = null

    this.setTitleInputRef = element => {
      this.titleInput = element
    }

    this.setBodyInputRef = element => {
      this.bodyInput = element
    }
    this.state = {
      titleValue: '',
      bodyValue: ''
    }
  }
  static contextType = TodoListContext

  componentDidMount() {
    this.focusBodyInput()
    if (this.props.title !== this.state.titleValue) {
      this.setState(state => {
        return updateObject(state, { titleValue: this.props.title })
      })
    }
  }

  focusBodyInput = () => {
    if (this.bodyInput) this.bodyInput.focus()
  }

  onTitleChangeHandler = event => {
    this.setState({ titleValue: event.target.value })
  }

  onBodyChangeHandler = event => {
    this.setState({ bodyValue: event.target.value })
  }

  onKeyDownHandler = event => {
    if (event.key === 'Escape') {
      this.props.stopCreatingItem()
    }
  }

  onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      this.context.addItem({ title: this.state.titleValue, text: this.state.bodyValue })
      this.props.stopCreatingItem()
      this.props.clearSearchString()
    }
  }

  render() {
    return (
      <Fragment>
        <input
          className={styles.itemForm_input}
          type="text"
          value={this.state.titleValue}
          ref={this.setTitleInputRef}
          onChange={this.onTitleChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyPress={this.onKeyPressHandler}
        />
        <input
          className={styles.itemForm_input}
          type="text"
          ref={this.setBodyInputRef}
          value={this.state.bodyValue}
          onChange={this.onBodyChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          onKeyPress={this.onKeyPressHandler}
        />
      </Fragment>
    )
  }
}

export default Itemform

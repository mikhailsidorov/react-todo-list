import React, { Component, Fragment } from 'react'

import { TodoListContext } from '../../../contexts'
import ItemForm from './ItemForm/ItemForm'
import { updateObject } from '../../shared/utility'
import styles from './searchAdd.module.css'

class SearchAdd extends Component {
  static contextType = TodoListContext
  state = {
    creatingItem: false
  }

  onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      this.setState(state => {
        return updateObject(state, { creatingItem: true })
      })
    }
  }

  onKeyDownHandler = event => {
    if (event.key === 'Escape') {
      this.setState(state => {
        return this.context.updateSearchString('')
      })
    }
  }

  clearSearchString = () => {
    this.context.updateSearchString('')
  }

  stopCreatingItem = () => {
    this.setState(state => {
      return updateObject(state, { creatingItem: false })
    })
  }

  onchangeHandler = event => {
    this.context.updateSearchString(event.target.value)
  }

  render() {
    const content = this.state.creatingItem ? (
      <ItemForm
        stopCreatingItem={this.stopCreatingItem}
        title={this.context.searchString}
        clearSearchString={this.clearSearchString}
      />
    ) : (
      <input
        className={styles.searchAdd}
        type="text"
        onKeyPress={this.onKeyPressHandler}
        value={this.context.searchString}
        onChange={this.onchangeHandler}
        placeholder="Search | Add"
        onKeyDown={this.onKeyDownHandler}
      />
    )

    return <Fragment>{content}</Fragment>
  }
}

export default SearchAdd

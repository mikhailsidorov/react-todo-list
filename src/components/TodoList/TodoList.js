import React, { Component } from 'react'
import { v4 as uuid4 } from 'node-uuid'

import { TodoListContext } from '../../contexts'
import SearchAdd from './SearchAdd/searchAdd'
import DatePicker from './DatePicker/DatePicker'
import TodoItem from './TodoItem/TodoItem'
import { updateObject } from '../shared/utility'
import styles from './TodoList.module.css'

class TodoList extends Component {
  state = {
    todoItems: [
      {
        id: 1,
        title: 'Item title',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        isDone: false,
        createdAt: new Date()
      },
      {
        id: 2,
        title: 'Item title 2',
        text: 'Fuga dolorem, ab, temporibus vitae aut deleniti fugiat obcaecati minima.',
        isDone: false,
        createdAt: new Date()
      },
      {
        id: 3,
        title: 'Item title 3',
        text: 'Minima recusandae veniam impedit numquam minus maiores ad autem.',
        isDone: true,
        createdAt: new Date()
      }
    ],
    searchString: '',
    firstDate: null,
    lastDate: null
  }

  switchItemStatus = itemId => {
    this.setState(state => {
      const itemIndex = state.todoItems.findIndex(item => itemId === item.id)
      const newItem = updateObject(state.todoItems[itemIndex], { isDone: !state.todoItems[itemIndex].isDone })
      const todoItems = [...state.todoItems]
      todoItems.splice(itemIndex, 1, newItem)
      return { todoItems: todoItems }
    })
  }

  deleteItem = itemId => {
    this.setState(state => {
      const itemIndex = state.todoItems.findIndex(item => itemId === item.id)
      const todoItems = [...state.todoItems]
      todoItems.splice(itemIndex, 1)
      return { todoItems: todoItems }
    })
  }

  updateTextItem = (itemId, newTitle, newBody) => {
    this.setState(state => {
      const itemIndex = state.todoItems.findIndex(item => itemId === item.id)
      const updatedProperties = {}
      if (newTitle != null) {
        updatedProperties.title = newTitle
      }
      if (newBody != null) {
        updatedProperties.text = newBody
      }
      const updatedItem = updateObject(state.todoItems[itemIndex], updatedProperties)
      const todoItems = [...state.todoItems]
      todoItems.splice(itemIndex, 1, updatedItem)
      return { todoItems: todoItems }
    })
  }

  addItem = itemData => {
    this.setState(state => {
      const newTodoItems = [
        {
          id: uuid4(),
          title: itemData.title,
          text: itemData.text,
          isDone: false,
          createdAt: new Date()
        },
        ...state.todoItems
      ]
      return { todoItems: newTodoItems }
    })
  }

  updateSearchString = newSearchString => {
    this.setState(state => {
      return updateObject(state, { searchString: newSearchString })
    })
  }

  updateFirstDate = newDate => {
    this.setState(state => {
      return updateObject(state, { firstDate: new Date(newDate) })
    })
  }

  updateLastDate = newDate => {
    console.log(newDate)
    this.setState(state => {
      return updateObject(state, { lastDate: new Date(newDate) })
    })
  }

  render() {
    const todoItems = this.state.todoItems
      .filter(item => {
        return item.text
          .toString()
          .toUpperCase()
          .includes(this.state.searchString.toUpperCase())
      })
      .filter(item => {
        if (this.state.firstDate) {
          if (this.state.firstDate) {
            if (this.state.firstDate.getDate() > item.createdAt.getDate()) {
              return false
            }
          }
          if (this.state.lastDate) {
            if (this.state.lastDate.getDate() < item.createdAt.getDate()) {
              return false
            }
          }
        }
        return true
      })
      .map(item => {
        return <TodoItem data={item} key={item.id} switchItemStatus={this.switchItemStatus} />
      })
    return (
      <TodoListContext.Provider
        value={{
          todoItems: this.state.todoItems,
          searchString: this.state.searchString,
          deleteItem: this.deleteItem,
          updateTextItem: this.updateTextItem,
          addItem: this.addItem,
          updateSearchString: this.updateSearchString
        }}
      >
        <div className={styles.todoList}>
          <SearchAdd addItem={this.addItem} />
          <DatePicker updateFirstDate={this.updateFirstDate} updateLastDate={this.updateLastDate} />
          {todoItems}
        </div>
      </TodoListContext.Provider>
    )
  }
}

export default TodoList

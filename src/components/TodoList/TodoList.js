import React, { Component } from 'react'

import { TodoListContext } from '../../contexts'
import SearchAdd from './SearchAdd/searchAdd'
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
    ]
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

  updateTextItem = (itemId, newText, type) => {
    this.setState(state => {
      const itemIndex = state.todoItems.findIndex(item => itemId === item.id)
      const updatedProperties = {}
      if (type === 'title') {
        updatedProperties.title = newText
      } else if (type === 'body') {
        updatedProperties.text = newText
      }
      const updatedItem = updateObject(state.todoItems[itemIndex], updatedProperties)
      const todoItems = [...state.todoItems]
      todoItems.splice(itemIndex, 1, updatedItem)
      return { todoItems: todoItems }
    })
  }

  render() {
    const todoItems = this.state.todoItems.map(item => {
      return <TodoItem data={item} key={item.id} switchItemStatus={this.switchItemStatus} />
    })
    return (
      <TodoListContext.Provider
        value={{ todoItems: this.state.todoItems, deleteItem: this.deleteItem, updateTextItem: this.updateTextItem }}
      >
        <div className={styles.todoList}>
          <SearchAdd />
          {todoItems}
        </div>
      </TodoListContext.Provider>
    )
  }
}

export default TodoList

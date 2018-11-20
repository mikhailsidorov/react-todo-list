import React, { Component } from 'react'

import SearchAdd from './SearchAdd/searchAdd'
import TodoItem from './TodoItem/TodoItem'
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

  render() {
    const todoItems = this.state.todoItems.map(item => {
      return <TodoItem data={item} key={item.id} />
    })
    return (
      <div className={styles.todoList}>
        <SearchAdd />
        {todoItems}
      </div>
    )
  }
}

export default TodoList

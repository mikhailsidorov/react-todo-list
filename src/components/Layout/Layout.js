import React from 'react'

import TodoList from '../TodoList/TodoList'
import styles from './Layout.module.css'

const layout = props => {
  return (
    <div className={styles.layout}>
      <TodoList />
    </div>
  )
}

export default layout

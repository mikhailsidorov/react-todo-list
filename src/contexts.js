import React from 'react'

export const TodoListContext = React.createContext({
  todoItems: [],
  searchString: '',
  deleteItem: () => {},
  updateTextItem: () => {},
  addItem: () => {},
  updateSearchString: () => {}
})

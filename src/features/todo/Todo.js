import React from 'react'
import TodoAdd from './TodoAdd'
import TodoFilterButtons from './TodoFilterButtons'
import TodoList from './TodoList'

function Todo() {
  return (
    <div>
        <TodoAdd/>
        <TodoList/>
        <TodoFilterButtons/>
    </div>
  )
}

export default Todo
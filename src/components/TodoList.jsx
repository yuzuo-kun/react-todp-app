import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, deleteTodo, toggleComplete, updateDeadLine, updatePriority }) {
  return (
    <ul className='todo-list'>
      {
        todos.length === 0 ? (
          <p>リストはありません</p>
        ) : (
          todos.map(todo =>
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              deleteTodo={deleteTodo} 
              toggleComplete={toggleComplete}
              updateDeadLine={updateDeadLine}
              updatePriority={updatePriority}
            />
          )
        )
      }
    </ul>
  )
}

export default TodoList
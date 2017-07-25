import React from 'react'

const TodoItem = ({ todo, completeTodo, deleteTodo }) => (
    <div>
      <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.id)} />

      { todo.completed ? <s>{todo.text}</s> : todo.text }

      <button onClick={() => deleteTodo(todo.id)} >
        -
      </button>
    </div>
)

export default TodoItem

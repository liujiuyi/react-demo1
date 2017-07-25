import React from 'react'

const Todos = ({todos}) => (
    <ol>
      {todos.map((todo, i) =>
          <li key={i} >
                  {todo.text}
          </li>
      )}
    </ol>
)

export default Todos

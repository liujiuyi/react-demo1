import React, { Component } from 'react'

import TodoItem from './todo-item';
export default class Todos extends Component {

    render() {
        const { todos, actions } = this.props;
        return (
            <div>
              <ul>
                {todos.map((todo, i) =>
                    <li key={i} >
                      <TodoItem todo={todo} editTodo={actions.editTodo} completeTodo={actions.completeTodo} deleteTodo={actions.deleteTodo} />
                    </li>
                )}
              </ul>
              <button onClick={() => actions.completeAll()} >
                Complete All
              </button>
              <button onClick={() => actions.clearComplete()} >
                Clear Completed
              </button>
            </div>
        );
    }
};

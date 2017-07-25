import React, { Component } from 'react'

export default class TodoItem extends Component {
    state = {
        editing: false,
    };
    handleDoubleClick = () => {
        this.setState({ editing: true });
    };
    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.editTodo(this.props.todo.id, text)
            this.setState({ editing: false });
        }
    };

    render() {
        const{ todo, completeTodo, deleteTodo } = this.props;
        let element;

        if (this.state.editing) {
            element = (
                <input
                    type="text"
                    defaultValue={todo.text}
                    onKeyDown={this.handleSubmit}
                />
            );
        } else {
            element = (
                <label onDoubleClick={this.handleDoubleClick}>
                  { todo.completed ? <s>{todo.text}</s> : todo.text }
                </label>
            );
        }
        return (
            <div>
              <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => completeTodo(todo.id)} />
              {element}
              <button onClick={() => deleteTodo(todo.id)} >
                -
              </button>
            </div>
        );
    }
}
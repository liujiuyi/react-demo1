import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';

export class TodoHeader extends Component {

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const node = ReactDOM.findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.add(text)
        this.setState({ text: '' })
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
              <input type="text"
                     ref='input'
                     autoFocus="true"
                     value={this.state.text}
                     onChange={this.handleChange}
              />
              <Button type="warn"
                      onClick={this.handleSubmit} >
                +
              </Button>
            </div>
        );
    }
};

class TodoItem extends Component {
    state = {
        editing: false,
    };
    handleDoubleClick = () => {
        this.setState({ editing: true });
    };
    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.editTodo({ ...this.props.todo, text})
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
                    autoFocus="true"
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
                  onChange={() => completeTodo(todo)} />
              {element}
              <button onClick={() => deleteTodo(todo.id)} >
                -
              </button>
            </div>
        );
    }
}

export class Todos extends Component {

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
              <button onClick={() => actions.clearCompleted()} >
                Clear Completed
              </button>
            </div>
        );
    }
};

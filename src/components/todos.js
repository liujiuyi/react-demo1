import React, { Component } from 'react'
import {
    FormCell,
    CellHeader,
    CellBody,
    Label,
    Input,
    Button,
} from 'react-weui';

export class TodoHeader extends Component {

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.add(text)
            this.setState({ text: '' })
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
              <FormCell>
                <CellHeader>
                  <Label>Add</Label>
                </CellHeader>
                <CellBody>
                  <Input
                      type="text"
                      placeholder="todo..."
                      autoFocus="true"
                      value={this.state.text}
                      onChange={this.handleChange}
                      onKeyDown={this.handleSubmit}
                  />
                </CellBody>
              </FormCell>
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
              <Button type="default"
                      size="small"
                      onClick={() => deleteTodo(todo.id)}
              >
                -
              </Button>
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
              <Button onClick={() => actions.completeAll()} >
                Complete All
              </Button>
              <Button onClick={() => actions.clearCompleted()} >
                Clear Completed
              </Button>
            </div>
        );
    }
};

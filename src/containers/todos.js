import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../actions/todo';
import TodoHeader from '../components/todo-header';
import TodoList from '../components/todo-list';

class Todos extends Component {
    componentDidMount() {
        this.props.actions.fetchTodos();
    }

    render() {
        const { todos, actions } = this.props
        return (
            <div>
              <TodoHeader add={actions.addTodo} />
              <TodoList todos={todos.list} actions={actions} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

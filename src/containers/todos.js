import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../actions/todo';
import TodoHeader from '../components/todo-header';
import TodoList from '../components/todo-list';

const Todos = ({todos, actions}) => (
    <div>
      <TodoHeader add={actions.addTodo} />
      <TodoList todos={todos} actions={actions} />
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

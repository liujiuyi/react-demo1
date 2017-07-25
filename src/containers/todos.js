import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from '../components/todo-list';

class Todos extends Component {

    render() {
      const { todos } = this.props
            return (
                <div>
                  <TodoList todos={todos}   />
                </div>
            );
    }
}

const mapStateToProps = state => {
    const { todos } = state;
    return {
      todos,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

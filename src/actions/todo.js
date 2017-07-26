import * as ACTION from '../constants/todo';

export const addTodo = (text) => (dispatch, getState) => {
  dispatch({
    type: ACTION.ADD_TODO_REQUEST,
  });

  const id = getState().todos.list.reduce((maxid, todo) =>
                                          Math.max(maxid, (todo.id ? todo.id : 0)), 0
                                         ) + 1;
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  return fetch('http://localhost:3001/todos', {
    method: 'PUT',
    headers,
    body: JSON.stringify({id, text})
  })
    .then(response => response.json())
    .then(json => dispatch({
      type: ACTION.ADD_TODO_SUCCESS,
      todos: json,
    }))
    .catch(e => dispatch({
      type: ACTION.ADD_TODO_FAILURE,
      error: e.message,
    }));
};
export const deleteTodo = (id)  => dispatch => {
  dispatch({
    type: ACTION.DELETE_TODO_REQUEST,
  });

  return fetch(`http://localhost:3001/todos/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(json => dispatch({
      type: ACTION.DELETE_TODO_SUCCESS,
      todos: json,
    }))
    .catch(e => dispatch({
      type: ACTION.DELETE_TODO_FAILURE,
      error: e.message,
    }));
};
export const editTodo = (id, text)  => dispatch => dispatch({
  type: ACTION.EDIT_TODO,
  id,
  text,
});
export const completeTodo = (id)  => dispatch => dispatch({
  type: ACTION.COMPLETE_TODO,
  id,
});
export const completeAll = ()  => dispatch => dispatch({
  type: ACTION.COMPLETE_ALL,
});
export const clearComplete = ()  => dispatch => dispatch({
  type: ACTION.CLEAR_COMPLETED,
});


export const fetchTodos = () => dispatch => {
  dispatch({
    type: ACTION.TODO_REQUEST,
  });
  return fetch('http://localhost:3001/todos')
    .then(response => response.json())
    .then(json => dispatch({
      type: ACTION.TODO_SUCCESS,
      todos: json,
    }))
    .catch(e => dispatch({
      type: ACTION.TODO_FAILURE,
      error: e.message,
    }));
};

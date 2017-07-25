import {
    ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED,
} from '../constants/todo';

export const addTodo = (text) => dispatch => dispatch({
    type: ADD_TODO,
    text,
});
export const deleteTodo = (id)  => dispatch => dispatch({
    type: DELETE_TODO,
    id,
});
export const editTodo = (id, text)  => dispatch => dispatch({
    type: EDIT_TODO,
    id,
    text,
});
export const completeTodo = (id)  => dispatch => dispatch({
    type: COMPLETE_TODO,
    id,
});
export const completeAll = ()  => dispatch => dispatch({
    type: COMPLETE_ALL,
});
export const clearComplete = ()  => dispatch => dispatch({
    type: CLEAR_COMPLETED,
});

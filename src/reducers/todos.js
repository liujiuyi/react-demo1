import * as ACTION from '../constants/todo';

const initialState = {
    isFetching: false,
    error: null,
    list: [{
        text: 'Use React',
        completed: false,
        id: 0
    }]};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.TODO_REQUEST:
        case ACTION.ADD_TODO_REQUEST:
        case ACTION.DELETE_TODO_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION.TODO_SUCCESS:
        case ACTION.ADD_TODO_SUCCESS:
        case ACTION.DELETE_TODO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.todos,
            };
        case ACTION.TODO_FAILURE:
        case ACTION.ADD_TODO_FAILURE:
        case ACTION.DELETE_TODO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        case ACTION.EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, text: action.text } : todo
            );

        case ACTION.COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );

        case ACTION.COMPLETE_ALL:
            const allMarked = state.every(todo => todo.completed);
            return state.map(todo =>
                ({ ...todo, completed: !allMarked })
            );

        case ACTION.CLEAR_COMPLETED:
            return state.filter(todo =>
                todo.completed === false
            );

        default:
            return state;
    }
};
export default todos;

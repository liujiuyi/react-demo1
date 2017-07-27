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
        case ACTION.EDIT_TODO_REQUEST:
        case ACTION.DELETE_TODO_REQUEST:
        case ACTION.COMPLETE_ALL_REQUEST:
        case ACTION.CLEAR_COMPLETED_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case ACTION.TODO_SUCCESS:
        case ACTION.ADD_TODO_SUCCESS:
        case ACTION.EDIT_TODO_SUCCESS:
        case ACTION.DELETE_TODO_SUCCESS:
        case ACTION.COMPLETE_ALL_SUCCESS:
        case ACTION.CLEAR_COMPLETED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.todos,
            };
        case ACTION.TODO_FAILURE:
        case ACTION.ADD_TODO_FAILURE:
        case ACTION.EDIT_TODO_FAILURE:
        case ACTION.DELETE_TODO_FAILURE:
        case ACTION.COMPLETE_ALL_FAILURE:
        case ACTION.CLEAR_COMPLETED_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        default:
            return state;
    }
};
export default todos;

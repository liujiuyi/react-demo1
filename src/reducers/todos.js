import {
    ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED,
} from '../constants/todo';

const todos = (state = [{
    text: 'Use React',
    completed: false,
    id: 0
}], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    text: 'Use React',
                    completed: false,
                    id: state.reduce((maxid, todo) =>
                        Math.max(maxid, todo.id), 0
                    ) + 1,
                },
                ...state,
            ]

        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            );

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, text: action.text } : todo
            );

        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );

        case COMPLETE_ALL:
            const allMarked = state.every(todo => todo.completed);
            return state.map(todo =>
                ({ ...todo, completed: !allMarked })
            );

        case CLEAR_COMPLETED:
            return state.filter(todo =>
                todo.completed === false
            );

        default:
            return state;
    }
};
export default todos;

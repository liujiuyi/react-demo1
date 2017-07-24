import { combineReducers } from 'redux';

import {
    MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE
} from '../actions';

const moviesReducer = (state = {
    isFetching: false,
    movies: [],
    err: null,
}, action) => {
    switch (action.type) {
        case MOVIE_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case MOVIE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movies: action.movies,
            }
        case MOVIE_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.err
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    moviesReducer,
});

export default rootReducer;

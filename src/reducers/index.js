import { combineReducers } from 'redux';

import {
    MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE,
    SELECT_MOVIE,
} from '../actions';

const movies = (state = {
    isFetching: false,
    list: [],
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
                list: action.movies,
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

const select_movie = (state = {
    movie: null,
}, action) => {
    switch (action.type) {
        case SELECT_MOVIE:
            return {
                ...state,
                movie: action.movie,
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    movies,
    select_movie,
});

export default rootReducer;

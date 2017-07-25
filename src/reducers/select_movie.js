import {
    SELECT_MOVIE,
} from '../constants/movie';

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

export default select_movie;

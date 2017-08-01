import {
  MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE, SELECT_MOVIE
} from '../constants/movie';

const fetchMovies = (movement='up', page=1) => dispatch => {
  dispatch({
    type: MOVIE_REQUEST,
  });
  return fetch('http://182.118.8.39:3000/vod_list?page=' + page)
    .then(response => response.json())
    .then(json => dispatch({
      type: MOVIE_SUCCESS,
      movies: json,
      downOrUp: movement,
    }))
    .catch(e => dispatch({
      type: MOVIE_FAILURE,
      error: e.message,
    }));
};
export const fetchMoviesIfNeed = (movement, page) => (dispatch, getState) => {
    dispatch(fetchMovies(movement, page));
};

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie,
});

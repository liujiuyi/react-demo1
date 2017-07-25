import {
  MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE, SELECT_MOVIE
} from '../constants/movie';

export const requestMovies = () => ({
  type: MOVIE_REQUEST,
});

export const receiveMovies = (json) => {

  return {
    type: MOVIE_SUCCESS,
    movies: json.data.children.map(child => child.data),
  };
};

export const receiveMoviesFailure = (err) => ({
  type: MOVIE_FAILURE,
  err,
});

export const fetchMovies = () => dispatch => {
  dispatch(requestMovies());
  return fetch('https://www.reddit.com/r/reactjs.json', {mode: 'cors'})
    .then(response => response.json())
    .then(json => dispatch(receiveMovies(json)))
    .catch(e => dispatch(receiveMoviesFailure(e.message)));
};

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie,
});

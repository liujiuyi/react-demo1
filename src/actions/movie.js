import {
  MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE, SELECT_MOVIE
} from '../constants/movie';

export const fetchMovies = () => dispatch => {
  dispatch({
    type: MOVIE_REQUEST,
  });
  return fetch('https://www.reddit.com/r/reactjs.json')
    .then(response => response.json())
    .then(json => dispatch({
      type: MOVIE_SUCCESS,
      movies: json.data.children.map(child => child.data),
    }))
    .catch(e => dispatch({
      type: MOVIE_FAILURE,
      error: e.message,
    }));
};

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie,
});

export const MOVIE_REQUEST = 'MOVIE_REQUEST';
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS';
export const MOVIE_FAILURE = 'MOVIE_FAILURE';


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

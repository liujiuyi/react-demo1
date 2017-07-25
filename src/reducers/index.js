import { combineReducers } from 'redux';

import movies from './movies';
import select_movie from './select_movie';
import todos from './todos';


const rootReducer = combineReducers({
  movies,
  select_movie,
  todos,
});

export default rootReducer;

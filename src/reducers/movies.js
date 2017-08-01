import {
  MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE,
} from '../constants/movie';

import union from 'lodash/union';

const movies = (state = {
  isFetching: false,
  lastPage: false,
  list: [],
  err: null,
}, action) => {
  switch (action.type) {
  case MOVIE_REQUEST:
    return {
      ...state,
      isFetching: true,
      lastPage:false,
    }
  case MOVIE_SUCCESS:
    let list = null;
    let lastPage = false;
    if(action.downOrUp === 'up'){//上拉
      if(action.movies.length === 0) {//上拉没有结果就是最后一页
        lastPage = true
      }
      list = union(state.list, action.movies);//有结果合并list
    } else {
      list = action.movies;//下拉重置list
    }
    return {
      ...state,
      isFetching: false,
      lastPage,
      list,
    }
  case MOVIE_FAILURE:
    return {
      ...state,
      isFetching: false,
      lastPage:false,
      error: action.error
    }
  default:
    return state;
  }
};
export default movies;

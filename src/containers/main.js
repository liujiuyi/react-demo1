import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactPullToRefresh from 'react-pull-to-refresh';

import { fetchMoviesIfNeed, selectMovie } from '../actions/movie';
import Movies from '../components/movies';
import Movie from '../components/movie';

class Main extends Component {
    constructor(props,context) {
      super(props,context);
      this.state = {
          page:1,
      }
      // 自定义方法
      this.handleRefresh = () => {
        let onPage = this.state.page;
        if(this.props.movies.list.length == 0){
          onPage = 1;
        } else {
          onPage += 1;
        }
        this.setState({
          page: onPage
        })
        this.props.fetchMovies(this.state.page);
      }
    }

    componentDidMount() {
        this.props.fetchMovies(this.state.page);
    }

    render() {
        const { movies, select_movie, clickHandle } = this.props
        const { isFetching, list, error } = movies;
        const { movie } = select_movie;
        const isEmpty = list.length === 0
        return (
            <ReactPullToRefresh onRefresh={this.handleRefresh}>
              { '上拉刷新' }
              { isFetching ? 'loading...' : '' }
              { error ? error : '' }
              { !isFetching && isEmpty ? 'no data' : '' }
              <Movies movies={list} clickHandle={clickHandle} />
              {movie && <Movie movie={movie} />}
              { !isFetching && !isEmpty && this.state.page ? '当前第' + this.state.page + '页' : '' }
            </ReactPullToRefresh>
        );
    }
}

const mapStateToProps = state => {
    const { movies, select_movie } = state;
    return {
        movies,
        select_movie,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickHandle: (movie) => {
            dispatch(selectMovie(movie))
        },
        fetchMovies: (page) => dispatch(fetchMoviesIfNeed(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

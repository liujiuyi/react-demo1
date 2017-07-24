import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMovies, selectMovie } from '../actions';
import Movies from '../components/movies';
import Movie from '../components/movie';

class Main extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchMovies())
    }

    clickHandle = (movie) => {
        const { dispatch } = this.props;
        dispatch(selectMovie(movie))
    };

    render() {
        const { movies, select_movie } = this.props
        const { isFetching, list, err } = movies;
        const { movie } = select_movie;
        const isEmpty = list.length === 0
        if (isFetching) {
            return (
                <div>
                  loading...
                </div>
            );
        } else if (err) {
            return (
                <div>
                  error: {err}
                </div>
            );
        } else if (isEmpty) {
            return (
                <div>
                  no data
                </div>
            );
        } else {
            return (
                <div>
                  <Movies movies={list} clickHandle={this.clickHandle} />
                  {movie && <Movie movie={movie} />}
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    const { movies, select_movie } = state;
    return {
        movies,
        select_movie,
    };
};

export default connect(mapStateToProps)(Main);

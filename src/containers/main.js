import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchMovies } from '../actions';
class Main extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchMovies())
    }

    render() {
        const { isFetching, movies, err } = this.props
        const isEmpty = movies.length === 0
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
                <ul>
                  {movies.map((post, i) =>
                      <li key={i}>{post.title}</li>
                  )}
                </ul>
            );
        }
    }
}

const mapStateToProps = state => {
    const { moviesReducer } = state;
    return moviesReducer;
};

export default connect(mapStateToProps)(Main);

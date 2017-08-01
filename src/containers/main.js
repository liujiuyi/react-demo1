import React, { Component } from 'react';
import { connect } from 'react-redux';

import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'reactjs-iscroll';

import { fetchMoviesIfNeed, selectMovie } from '../actions/movie';
import Movies from '../components/movies';
import Movie from '../components/movie';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 1,//当前页码
        callback: null,//滑动后回调函数
      };
    }

    componentDidMount() {
      //初始数据
      this.loadData();
    }
    
    componentDidUpdate(){
      //页面更新完成后调用Scroll重新refresh页面
      if (this.state.callback && typeof this.state.callback === 'function') {
        setTimeout(() => {
          this.state.callback();
        }, 1000);
      }
    }
    
    //滑动处理
    handleRefresh(downOrUp, callback) {
      let {currentPage} = this.state;
      if (downOrUp === 'up') { // 上拉加载更多
        currentPage++;
      } else { // 下拉刷新
        currentPage = 1;
      }
      this.setState({
        callback: callback
      });
      this.setState({
        currentPage,
      }, () => {
        this.loadData(downOrUp, this.state.currentPage);
      });
    }
    
    loadData(downOrUp, currentPage) {
      //滑动动作，页码
      this.props.fetchMoviesIfNeed(downOrUp, currentPage);
    }

    render() {
        const { movies, select_movie, clickHandle } = this.props
        const { lastPage, list, error } = movies;
        const { movie } = select_movie;
        return (
            <div>
              { error ? error : '' }
              <ReactIScroll iScroll={iScroll} handleRefresh={this.handleRefresh.bind(this)} pullUp={!lastPage} style={{height: '92%', background:'#FCFCCC'}}>
              <Movies movies={list} clickHandle={clickHandle} />
              {movie && <Movie movie={movie} />}
              </ReactIScroll>
            </div>
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
        fetchMoviesIfNeed: (movement, page) => dispatch(fetchMoviesIfNeed(movement, page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
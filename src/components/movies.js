import React from 'react'

const Movies = ({movies, clickHandle}) => (
    <ol>
      {movies.map((movie, i) =>
          <li key={i} onClick={() => clickHandle(movie)}>
            <a href="javascript:;">
              {movie.title}
            </a>
          </li>
      )}
    </ol>
)

export default Movies

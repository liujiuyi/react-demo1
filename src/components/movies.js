import React from 'react'

import {
  Link
} from 'react-router-dom'

const Movies = ({movies, clickHandle}) => (
    <ol>
      {movies.map((movie, i) =>
          <li key={i} onClick={() => clickHandle(movie)}>
                  <Link to={`/detail/${movie._id}`}>
                  {movie.title}
                  </Link>
          </li>
      )}
    </ol>
)

export default Movies

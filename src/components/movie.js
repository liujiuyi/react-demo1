import React from 'react'

const Movie = ({movie}) => (
    <div>
      {movie.title}
      <br/>
      {movie.selftext_html}
    </div>
)

export default Movie

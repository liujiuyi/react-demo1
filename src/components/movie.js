import React from 'react'

function createMarkup(movie) {
    return {__html: movie.selftext};
}
const Movie = ({movie}) => (
    <div>
      {movie.title}
      <br/>
      <div dangerouslySetInnerHTML={createMarkup(movie)} />
    </div>
)

export default Movie

import React from 'react'

const Detail = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

export default Detail

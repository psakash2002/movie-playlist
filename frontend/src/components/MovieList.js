import React from 'react'
const MovieList = (props) => {
  return (
    <div>{props.movies.map((movie, index)=>
    <div className='d-flex justify-content-start m-3'>
        <img src={movie.Poster} alt="movieImg"></img>
    </div>)}</div>
  )
}

export default MovieList
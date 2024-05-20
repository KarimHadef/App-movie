import React from 'react'

const movies = () => {
    const {movie}=useGlobalContext();
  return (
    <>{movie.map((curMovie) => {
return <div>
    <h2>{curMovie.Title}</h2>
</div>
    })}
    
    
</>
  )
}

export default movies ;
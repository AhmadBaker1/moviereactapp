/* This will allow to display multiple movie cards as props instead 
    of creating code lines by copying and pasting every time */ 

    import React from 'react'
    
    const MovieCard = ({ movie }) => { // movie is used as a prop to not repeat
      return (
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>

        <div>
            <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
          /* This says if poster object does have a poster then it show 
            what's visible, if not, a 400 error image will show */
          alt={movie.Title} 
          />
        </div>

        {/* This area is the movie details area */}
        <div>
          < span>
                {movie.Type}
                <h3>{movie.Title}</h3>
            </span>
        </div>
        </div>
      )
    }
    
    export default MovieCard
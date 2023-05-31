import { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'http://omdbapi.com?apikey=33008425';

const movie = {
  "Title": "Superman",
  "Year": "1978",
  "imdbID": "tt0078346",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    // this will call our API
    // async means it takes time to load 
    // pass in "title" to accept a title to search for
    // `` are template string to dynamic search for a movie title

    const data = await response.json();
    // Once we get response we want to get the data by this code

    setMovies(data.Search) // Gives us access to movies to access array
    // Only getting the search array 
  }  
    
    


  useEffect(() => {
    searchMovies('Superman');
  }, []); /* the useEffect is used to load stuff as soon as page is loaded
        and [] is used to cut the process after it has loaded once */ 

  return (
  <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
      <input
        placeholder='Search for a movie'
        value={searchTerm} // used to detect the user's search
        onChange={(e) => setSearchTerm(e.target.value)} // Used to change search value by typing
        type="text" 
        />
      <img 
        src={SearchIcon}
        alt="search-icon" 
        onClick={() => searchMovies(searchTerm)} // To listen to the click event
        />
        
    </div>

    {
      movies?.length > 0 
      ? ( 
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))} {/* We are dynamically looping around the whole movies array 
              fetched from the movie api and taking each movie and passing it to
              the prop of MovieCard which will render all movies*/}
        </div>
        )  : 
        (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

export default App
import logo from './logo.svg';
import './App.css';
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import {useState, useEffect} from 'react'

function App() {
   const apiKey = "f6b6d2d3";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch(e){
      console.error(e)
    }
  };
    //This will run on the first render but not on subsquent renders
    useEffect(() => {
      getMovie("Clueless");
    }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;

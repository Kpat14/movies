import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

//a9c477be

const API_URL = 'http://www.omdbapi.com?apikey=a9c477be';

const movie1 = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",   
    "Title": "Spider-Man",
    "Type":"movie",
    "Year": "2002",
    "imdbID": "tt0145487"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spider-man');
    }, []);

    useEffect(() => {

    },[]);

    return (
        <div className="app">
            <h1>Hello, React!</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                
                />
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>

            {
                movies?.length > 0
                    ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                    ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                    )    
            }

            
        </div>
    );

}

export default App;
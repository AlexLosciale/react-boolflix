import { useState, useEffect, useContext } from 'react';
import SerchContext from '../context/SerchContext';

const API_KEY = '5e886869f2fb80bac715071e2808f651'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export default SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const query = useContext(SerchContext).query;

    useEffect(() => {
        if(!query){return;}       
        fetchMovies();
    }, [query]);
    
    const fetchMovies = () => {
        fetch(`${BASE_URL}/search/movie?query=${query}&language=en-US&page=1&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    };

    return (
        <>
            <h1 className="lista-uno">RISULTATI FILM</h1>
            <div className="main">
                <div className="movies-grid">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
};

const MovieCard = ({ movie }) => {
    const imageUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/200';
    
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Uscita: {movie.release_date || 'Data non disponibile'}</p>
        </div>
    );
};
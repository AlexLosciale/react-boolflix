import { useState, useEffect } from 'react';

const API_KEY = '5e886869f2fb80bac715071e2808f651'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const Main = ({ query }) => {
    const [movies, setMovies] = useState([]);

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

export default Main;
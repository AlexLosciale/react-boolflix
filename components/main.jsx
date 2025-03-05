const Main = ({ movies }) => {
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
const Main = ({ movies }) => {
    return (
        <div className="main">
            <h1>Risultati</h1>
            <div className="movies-grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
        </div>
    );
};

export default Main;
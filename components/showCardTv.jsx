const ShowCardTv = ({ movie }) => {
    const imageUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/200';
    
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <h3>{movie.original_name}</h3>
            <p>Uscita: {movie.first_air_date || 'Data non disponibile'}</p>
            <p>Voto: {Math.floor(movie.vote_average)}</p>
        </div>
    );
};

export default ShowCardTv;
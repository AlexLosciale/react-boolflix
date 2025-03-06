const ShowCard = ({ movie }) => {
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

export default ShowCard;
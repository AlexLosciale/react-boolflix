const ShowCardTv = ({ movie }) => {
    const imageUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/200';
    
    const maxStars = 5;
    const rating = Math.min(Math.max(Math.floor(movie.vote_average / 2), 1), maxStars);
    
    return (
        <div className="movie-card">
            <img src={imageUrl} alt={movie.original_name} />
            <h3>{movie.original_name}</h3>
            <p>Uscita: {movie.first_air_date || 'Data non disponibile'}</p>
            <p>
                Voto: {Array.from({ length: maxStars }, (_, i) => (
                    <span key={i}>{i < rating ? '★' : '☆'}</span>
                ))}
            </p>
        </div>
    );
};

export default ShowCardTv;
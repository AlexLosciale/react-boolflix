import { useState, useEffect, useContext } from 'react';
import SerchContext from '../context/SerchContext';
import ShowCardTv from './showCardTv';

const API_KEY = '5e886869f2fb80bac715071e2808f651'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const SearchSiries = () => {
    const [series, setSeries] = useState([]);
    const query = useContext(SerchContext).query;

    useEffect(() => {
        if(!query){return;}       
        fetchMovies();
    }, [query]);
    
    const fetchMovies = () => {
        fetch(`${BASE_URL}/search/tv?query=${query}&language=en-US&page=1&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setSeries(data.results))
            .catch(err => console.error(err));
    };

    return (
        <>
            <h1 className="lista-uno">RISULTATI SERIE TV</h1>
            <div className="main">
                <div className="movies-grid">
                    {series.map(movie => (
                        <ShowCardTv key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchSiries;
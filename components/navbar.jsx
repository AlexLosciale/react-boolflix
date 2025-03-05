import { useState } from 'react';

const API_KEY = '5e886869f2fb80bac715071e2808f651';
const BASE_URL = 'https://api.themoviedb.org/3';

const Navbar = ({ setMovies }) => {
    const [query, setQuery] = useState('');

    const fetchMovies = () => {
        fetch(`${BASE_URL}/search/movie?query=${query}&language=en-US&page=1&api_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <h1><strong>BOOLFLIX</strong></h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Cerca film" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={fetchMovies}>Cerca</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
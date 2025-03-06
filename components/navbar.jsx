import { useState, useContext, useEffect } from 'react';
import SerchContext from '../context/SerchContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [localQuery, setLocalQuery] = useState('');
    const { query, setQuery } = useContext(SerchContext);

    const handleSearch = () => {
        setQuery(localQuery);
    };

    useEffect(() => {
        console.log('query', query);
        
        setLocalQuery(query);
    }, [query]);

    return (
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" activeClassName="active">
                <h1><strong>BOOLFLIX</strong></h1>
            </NavLink>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/film" activeClassName="active">FILM</NavLink>
                    </li>
                    <li>
                        <NavLink to="/serie" activeClassName="active">SERIE TV</NavLink>
                    </li>
                </ul>
                <div>
                    <input 
                        type="text" 
                        placeholder="⌕" 
                        value={localQuery} 
                        onChange={(e) => setLocalQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Cerca</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
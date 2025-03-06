import { useState, useContext } from 'react';
import SerchContext from '../context/SerchContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [localQuery, setLocalQuery] = useState('');
    const { setQuery } = useContext(SerchContext);

    const handleSearch = () => {
        setQuery(localQuery);
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <h1><strong>BOOLFLIX</strong></h1>
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
                        placeholder="Cerca" 
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
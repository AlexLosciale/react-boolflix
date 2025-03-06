import { useState, useContext } from 'react';
import SerchContext from '../context/SerchContext';

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
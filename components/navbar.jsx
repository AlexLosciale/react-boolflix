import { useState } from 'react';

const Navbar = ({onSearch}) => {
    const [query, setQuery] = useState('');
    const handleSearch = () => {onSearch(query);};

    return (
        <nav>
            <div className="nav-wrapper">
                <h1><strong>BOOLFLIX</strong></h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Cerca" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Cerca</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
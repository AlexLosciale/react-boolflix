import React from 'react';
import Navbar from './navbar';

const Header = ({ onSearch }) => {
    const handleSearch = (searchQuery) => {
        if (typeof onSearch === 'function') {
            onSearch(searchQuery);
        }
    };

    return (
        <header>
            <Navbar onSearch={handleSearch} />
        </header>
    );
};

export default Header;
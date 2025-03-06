import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from "../components/header";
import Home from "../components/home";
import SearchPage from "../components/searchPage";
import SearchTV from "../components/serchTv";
import SearchContext from "../context/serchContext";

function App() {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film" element={<SearchPage />} />
          <Route path="/serie" element={<SearchTV />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;
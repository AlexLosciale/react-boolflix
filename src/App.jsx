import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Header from "../components/header";
import SearchPage from "../components/searchPage";
import serchTV from "../components/serchTv";
import SerchContext from "../context/SerchContext";

function App() {
  const [query, setQuery] = useState('');

  return (
    <SerchContext.Provider value={{ query, setQuery }}>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/tv" element={<serchTV />} />
        </Routes>
      </BrowserRouter>
    </SerchContext.Provider>
  );
};

export default App;
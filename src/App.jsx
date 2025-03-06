import { useState } from 'react';
import Header from "../components/header";
import SearchPage from "../components/searchPage";
import SerchContext from "../context/SerchContext";

function App() {
  const [query, setQuery] = useState('');

  return (
    <SerchContext.Provider value={{ query, setQuery }}>
      <Header />
      <SearchPage />
    </SerchContext.Provider>
  );
};

export default App;
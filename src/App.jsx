import Header from "../components/header";
import Main from "../components/main";
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Main query={query} />
    </div>
  );
};

export default App;
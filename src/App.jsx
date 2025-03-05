import Header from "../components/header";
import Main from "../components/main";
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <Header setMovies={setMovies} />
      <Main movies={movies} />
    </div>
  );
};

export default App;

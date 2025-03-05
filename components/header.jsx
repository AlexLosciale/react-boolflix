import Navbar from "./navbar";

const Header = ({ setMovies }) => {
  return (
    <header>
        <Navbar setMovies={setMovies} />
    </header>
  );
};

export default Header;

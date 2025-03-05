const navbar = () => {
  return (
    <nav>
        <div className="nav-wrapper">
            <div>
                <h1><strong>BOOLFLIX</strong></h1>      
            </div>
            <div>
                <input type="text" placeholder="Cerca film" />
                <button>Cerca</button>
            </div>
        </div>
    </nav>
  );
}
export default navbar;
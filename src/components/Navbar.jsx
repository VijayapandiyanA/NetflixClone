import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">

      <h2 className="logo">NETFLIX</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/mylist">My List</Link>

      </div>

    </nav>
  );

}

export default Navbar;
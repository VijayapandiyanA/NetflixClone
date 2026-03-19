import { useDispatch } from "react-redux";
import { addToList } from "../redux/movieSlice";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToList(movie));
  };

  return (

    <div className="movie-card">

      <Link to={`/movie/${movie.id}`}>
        <img src={movie.image} alt={movie.title}/>
      </Link>

      <div className="movie-info">
        <h4>{movie.title}</h4>

        <button onClick={handleAdd}>
          + My List
        </button>

      </div>

    </div>

  );
}

export default MovieCard;
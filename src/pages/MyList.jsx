import { useSelector, useDispatch } from "react-redux";
import { removeFromList } from "../redux/movieSlice";
import "./MyList.css";

function MyList(){

  const dispatch = useDispatch();

  const myList = useSelector(
    state => state.movies.myList
  );

  return(

    <div className="mylist-page">

      <h1>My List</h1>

      {myList.length === 0 ? (

        <p className="empty">
          No movies added yet
        </p>

      ) : (

        <div className="mylist-grid">

          {myList.map(movie => (

            <div key={movie.id} className="movie-card">

              <img
                src={movie.image}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <button
                className="remove-btn"
                onClick={() =>
                  dispatch(removeFromList(movie.id))
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default MyList;
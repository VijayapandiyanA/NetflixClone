import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import "./Movies.css";

function Movies(){

  return(

    <div className="movies-page">

      <h1 className="movies-title">Movies</h1>

      <div className="movies-grid">

        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </div>

  )

}

export default Movies;
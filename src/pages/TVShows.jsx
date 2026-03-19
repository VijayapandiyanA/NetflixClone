import tvshows from "../data/tvshows";
import MovieCard from "../components/MovieCard";
import "./TVShows.css";

function TVShows() {

  const trending = tvshows.slice(0,6);
  const popular = tvshows.slice(6,12);
  const originals = tvshows.slice(12,18);

  return (

    <div className="tv-page">

      <div className="tv-header">
        <h1>TV Shows</h1>
        <p>Watch your favorite TV series and Netflix originals</p>
      </div>


      <div className="tv-row">
        <h2>Trending Shows</h2>

        <div className="tv-grid">
          {trending.map(show => (
            <MovieCard key={show.id} movie={show}/>
          ))}
        </div>
      </div>


      <div className="tv-row">
        <h2>Popular Shows</h2>

        <div className="tv-grid">
          {popular.map(show => (
            <MovieCard key={show.id} movie={show}/>
          ))}
        </div>
      </div>


      <div className="tv-row">
        <h2>Netflix Originals</h2>

        <div className="tv-grid">
          {originals.map(show => (
            <MovieCard key={show.id} movie={show}/>
          ))}
        </div>
      </div>

    </div>

  );
}

export default TVShows;
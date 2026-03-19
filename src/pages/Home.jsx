import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import "./Home.css";
import bannerImg from "../assets/Kadaisi-Vivasayi.avif";

function Home() {

const trending = movies.slice(2,8);
  const popular = movies.slice(6,12);
  const originals = movies.slice(12,18);

  return (
    <div className="home">

      {/* HERO BANNER */}

       <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-content">
          <h1 className="banner-title">Kadaisi Vivasayi</h1>

          <p className="banner-description">
            A team of explorers travel through a wormhole in space
            in an attempt to ensure humanity's survival.
          </p>

          <div className="banner-buttons">
            <button className="play-btn">▶ Play</button>
            <button className="list-btn">+ My List</button>
          </div>
        </div>
      </div>


      {/* TRENDING ROW */}

      <div className="row">
        <h2>Trending Now</h2>

        <div className="row-posters">
          {trending.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>


      {/* POPULAR MOVIES */}

      <div className="row">
        <h2>Popular Movies</h2>

        <div className="row-posters">
          {popular.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>


      {/* NETFLIX ORIGINALS */}

      <div className="row">
        <h2>Netflix Originals</h2>

        <div className="row-posters">
          {originals.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
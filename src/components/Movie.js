import "./Movie.css";
import data from "../data";
import { useState } from "react";
import MovieDeleteButton from "./MovieDeleteButton";
import MovieDeleteAllButton from "./MovieDeleteAllButton";
import MovieRender from "./MovieRender";

const Movie = () => {
  const [movieList, setMovieList] = useState(data);

  const handleDeleteMovie = (id) => {
    const filterItem = movieList.filter((oneMovie) => {
      return oneMovie.id !== id;
    });
    setMovieList(filterItem);
  };

  const handleDeleteAllMovie = () => {
    setMovieList([]);
  };

  return (
    <section>
      <div className="all-movies">
        {movieList.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;
          return (
            <div className="one-movie" key={id}>
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDeleteButton deleteButton={() => handleDeleteMovie(id)} />
            </div>
          );
        })}
         </div>
        <div className="button-box">
          <MovieDeleteAllButton deleteAllButton={handleDeleteAllMovie} />
          <MovieRender
            allMovies={() => {
              setMovieList(data);
            }}
          />
        </div>
     
    </section>
  );
};

export default Movie;

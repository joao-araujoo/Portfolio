import MoviePoster from "../../Atoms/MoviePoster";
import styles from "./styles.module.css";
import moviesData from "../../../data/movies.json";

export default function MoviesContainer() {
  return (
    <div className={styles.wrapper}>
      {moviesData.map((movie) => (
        <MoviePoster
          key={movie.id}
          poster={movie.pathToPoster}
          alt={movie.altText}
        />
      ))}
    </div>
  );
}

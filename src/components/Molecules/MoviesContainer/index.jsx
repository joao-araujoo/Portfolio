import MoviePoster from '../../Atoms/MoviePoster';
import styles from "./styles.module.css";

export default function MoviesContainer() {
  return (
    <div
      className={styles.wrapper}
    >
      <MoviePoster 
        poster="/posters/karate kid.jpg" 
        alt="Karate Kid Poster" 
      />
      <MoviePoster
        poster="/posters/the green mile.jpg"
        alt="The Green Mile Poster"
      />
      <MoviePoster
        poster="/posters/singin in the rain.jpg"
        alt="Singin In The Rain Poster"
      />
      <MoviePoster
        poster="/posters/howls moving castle.jpg"
        alt="Howls Moving Castle Poster"
      />
      <MoviePoster
        poster="/posters/come and see.jpg"
        alt="Come And See Poster"
      />
      <MoviePoster
        poster="/posters/django unchained.jpg"
        alt="Django Unchained Poster"
      />
      <MoviePoster
        poster="/posters/charlie and the chocolate factory.jpg"
        alt="Charlie And The Chocolate Factory Poster"
      />
    </div>
  );
}

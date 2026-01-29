import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(({ imgUrl, imdbUrl, title, description, imdbId }) => (
      <MovieCard
        key={imdbId}
        movie={{
          imgUrl,
          imdbUrl,
          title,
          description,
        }}
      />
    ))}
  </div>
);

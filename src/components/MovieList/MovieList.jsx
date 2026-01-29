import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MovieList = () => (
  <div className="movies">
    {moviesFromServer.map(({ imgUrl, imdbUrl, title, description, imdbId }) => (
      <MovieCard
        key={imdbId}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        title={title}
        description={description}
      />
    ))}
  </div>
);

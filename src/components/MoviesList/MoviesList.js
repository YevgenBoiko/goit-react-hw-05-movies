import { useLocation } from 'react-router-dom';
import { List, MovieLink } from './MovieList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </MovieLink>
          </li>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default MoviesList;

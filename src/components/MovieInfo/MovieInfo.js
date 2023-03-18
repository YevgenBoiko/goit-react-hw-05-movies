import {
  BackBtn,
  MovieDetailsCont,
  MovieSection,
  Title,
} from './MovieInfo.styled';
import { FiArrowLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';

const MovieInfo = ({
  movie: { original_title, vote_average, overview, genres, poster_path },
  backLink,
}) => {
  return (
    <>
      <BackBtn to={backLink}>
        <FiArrowLeft />
        Back
      </BackBtn>
      <MovieSection>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={original_title}
          />
        ) : (
          <img src="https://gdr.one/simg/300x300" alt="" />
        )}

        <MovieDetailsCont>
          <Title>{original_title}</Title>
          {vote_average > 0 && <p>User score: {vote_average}</p>}
          {overview && overview.length > 0 ? (
            <>
              <h2>Overview</h2>
              <p>{overview}</p>
            </>
          ) : (
            ''
          )}
          {genres && genres.length > 0 ? (
            <>
              <h2>Genres</h2>
              <p>{genres.map(genre => genre.name).join(' ')}</p>
            </>
          ) : (
            ''
          )}
        </MovieDetailsCont>
      </MovieSection>
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfo;

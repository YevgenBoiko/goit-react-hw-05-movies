import { GetSearchMovies } from 'components/GetMovieInfo';
import MoviesForm from 'components/MoviesForm/MoviesForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  let searchMovieName = searchParams.get('query') ?? '';

  const handleNameChange = event => {
    const query = event.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchMovieName === '') return;

    GetSearchMovies(searchMovieName).then(response =>
      setMovieList(response.data.results)
    );
  };

  useEffect(() => {
    GetSearchMovies(searchMovieName).then(response =>
      setMovieList(response.data.results)
    );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MoviesForm
        submit={handleSubmit}
        change={handleNameChange}
        query={searchMovieName}
      />
      {movieList && <MoviesList movies={movieList} />}
    </>
  );
};

export default Movies;

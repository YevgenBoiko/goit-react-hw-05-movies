import { GetTranding } from 'components/GetMovieInfo';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    GetTranding().then(response => setMovies(response.data.results));
  }, []);

  return <>{movies && <MoviesList movies={movies} />}</>;
};

export default Home;

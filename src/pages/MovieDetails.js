import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { GetMovieByID } from 'components/GetMovieInfo';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  useEffect(() => {
    GetMovieByID(movieId).then(response => setMovie(response.data));
  }, [movieId]);

  return (
    <>
      {movie && (
        <MovieInfo movie={movie} backLink={backLinkLocationRef.current} />
      )}
      <section>
        <AdditionalInfo />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetails;

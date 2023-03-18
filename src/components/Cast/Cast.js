import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetCastByID } from 'components/GetMovieInfo';
import ActorsList from 'components/ActorsList/ActorsList';

const Cast = () => {
  const [actors, setActors] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    GetCastByID(movieId).then(response => setActors(response.data.cast));
  }, [movieId]);

  return (
    <>
      <ActorsList actors={actors} />
    </>
  );
};

export default Cast;

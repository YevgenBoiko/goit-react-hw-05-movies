import PropTypes from 'prop-types';

const ActorsList = ({ actors }) => {
  return (
    <>
      {actors && actors.length > 0 ? (
        <ul>
          {actors.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt=""
                />
                <p>{actor.name}</p>
                <p>Charater: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any casts for this movie</p>
      )}
    </>
  );
};

ActorsList.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

export default ActorsList;

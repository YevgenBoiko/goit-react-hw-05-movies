import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ReviewsList;

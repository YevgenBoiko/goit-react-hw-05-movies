import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetReviewsByID } from 'components/GetMovieInfo';
import ReviewsList from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    GetReviewsByID(movieId).then(response => setReviews(response.data.results));
  }, [movieId]);

  return <div>{reviews && <ReviewsList reviews={reviews} />}</div>;
};

export default Reviews;

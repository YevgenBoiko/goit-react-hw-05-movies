import { Section, StyledLink } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <Section>
      <h3>Additional information</h3>
      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
    </Section>
  );
};

export default AdditionalInfo;

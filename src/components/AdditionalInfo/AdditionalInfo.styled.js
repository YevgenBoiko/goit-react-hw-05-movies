import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-left: 15px;
  padding-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  color: black;
  :hover {
    color: orangered;
  }
`;

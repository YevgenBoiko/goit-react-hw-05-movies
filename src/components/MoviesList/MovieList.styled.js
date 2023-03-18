import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* list-style: none; */
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: orangered;
  }
`;

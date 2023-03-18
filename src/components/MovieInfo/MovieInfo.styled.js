import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  padding: 5px 7px;
  margin: 15px 15px;
  width: 55px;
  border: 1px black solid;
  border-radius: 4px;
  color: black;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: orangered;
    border: orangered 1px solid;
  }
`;

export const MovieSection = styled.section`
  display: flex;
  padding: 15px;
`;

export const MovieDetailsCont = styled.div`
  margin-left: 15px;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

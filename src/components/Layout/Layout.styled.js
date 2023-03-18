import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: lightgray;
`;

export const List = styled.ul`
  align-items: center;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 15px;
  height: 50px;
`;

export const NavBtn = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }

  :hover {
    color: orangered;
  }
`;

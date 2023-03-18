import styled from 'styled-components';

export const SearchForm = styled.form`
  padding-top: 20px;
  padding-left: 15px;
`;

export const SearchBtn = styled.button`
  border: none;
  padding: 5px 7px;
  border-radius: 3px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: orangered;
  }
`;

export const Input = styled.input`
  margin-left: 15px;
  width: 350px;
`;

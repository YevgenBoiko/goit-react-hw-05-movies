import { Input, SearchBtn, SearchForm } from './MovieForm.styled';
import PropTypes from 'prop-types';

const MoviesForm = ({ submit, change, query }) => {
  return (
    <SearchForm onSubmit={submit}>
      <SearchBtn type="submit">Search</SearchBtn>

      <Input
        className="form-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={change}
        value={query}
      />
    </SearchForm>
  );
};
MoviesForm.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default MoviesForm;

import PropTypes from 'prop-types';
import { Wrapper, Search } from './Filter.styled';
const Filter = ({onSearch, searchName}) => {
    return (
      <Wrapper>
        <label>
          Find contacts by name
          <Search
            name="text"
            type="text"
            value={searchName}
            onChange={onSearch}
          ></Search>
        </label>
        </Wrapper>
      )
    }

export default Filter;

Filter.propTypes = {
  searchName: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}
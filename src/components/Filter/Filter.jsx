import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterField>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </FilterField>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

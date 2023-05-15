import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer htmlFor="">
    Finde coctacts by name
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterContainer>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

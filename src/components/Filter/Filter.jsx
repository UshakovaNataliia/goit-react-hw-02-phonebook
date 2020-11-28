import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({onFilter, filter}) => {
  return (
    <label>
      Find contacts by name
      <br/> 
      <input type="text" value={filter} onChange={onFilter} />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
}

export default Filter;
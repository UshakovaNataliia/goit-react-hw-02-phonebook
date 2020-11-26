import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  return (
    <label>
      Find contacts by name
      <br/> 
      <input type="text" name="filter" onChange={props.onFilter} />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
}

export default Filter;
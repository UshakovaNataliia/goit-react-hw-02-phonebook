import React from 'react';
import PropTypes from 'prop-types';

const ContactList = props => {
  const { onFilter, onDelete } = props;

  return (
    <ul>
      {onFilter.map(el => {
        const { name, number, id } = el;
        return (
          <li key={id}>
            {' '}
            {name}: {number}{' '}
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
            <br />
            <br/>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onFilter: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
import React from 'react';
import PropTypes from 'prop-types';

const ContactList = props => {
  const { toFilter, onDelete } = props;

  return (
    <ul>
      {toFilter.map(el => {
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
  toFilter: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
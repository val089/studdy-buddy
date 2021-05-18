import React from 'react';
import PropTypes from 'prop-types';

//możemy ustawić domyślną wartość jeśli jakiś props nie jest wymagany w propTypes
const UsersListItem = ({ user: { average, name, attendance = '0%' } }) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

//propTypes deklarujemy tam gdzie komponent przyjmuje jakieś propsy

export default UsersListItem;

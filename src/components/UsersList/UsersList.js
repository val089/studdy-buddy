import React from 'react';
import PropTypes from 'prop-types';
import users from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UsersListItem key={`user-${user.id}`} user={user} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default UsersList;

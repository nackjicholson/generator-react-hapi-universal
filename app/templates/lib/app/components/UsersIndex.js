import React from 'react';
import {Link} from 'react-router';
import users from '../users';

const userIds = Object.keys(users);

class UsersIndex extends React.Component {
  render() {
    const userItems = userIds.map((id) => {
      return <li key={id}><Link to={`/${id}`}>{users[id].name}</Link></li>;
    });

    return <ul>{userItems}</ul>;
  }
}

export default UsersIndex;

import React from 'react';
import users from '../users';

class UserProfile extends React.Component {
  render() {
    const user = users[this.props.params.id];
    const twitterUrl = `http://twitter.com/${user.twitter}`;
    const githubUrl = `https://github.com/${user.github}`;

    return (
      <div>
        <h3>User: {user.name}</h3>
        <ul>
          <li><b>github:</b> <a href={githubUrl}>{user.github}</a></li>
          <li><b>twitter:</b> <a href={twitterUrl}>@{user.twitter}</a></li>
          <li><b>about:</b> {user.about}</li>
        </ul>
      </div>
    );
  }
}

UserProfile.propTypes = {
  params: React.PropTypes.object.isRequired
};

export default UserProfile;

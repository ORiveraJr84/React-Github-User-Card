import React from "react";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const user = this.props.user;
    const color = "3c3f52"; //Hex color code without hash symbol
    return (
      <div className="cardWrapper">
        {user.bio !== null ? <p>Bio: {user.bio}</p> : null}
        <p>
          Followers:
          <a
            target="_blank"
            href={`https://www.github.com/${user.username}?tab=followers`}
          >
            {user.followersCount}
          </a>
        </p>
        <p>
          Following:
          <a
            target="_blank"
            href={`https://www.github.com/${user.username}?tab=following`}
          >
            {user.followingCount}
          </a>
        </p>
        <a target="_blank" href={`https://www.github.com/${user.username}`}>
          <img src={user.image} alt={`Picture of ${user.name}`} />
        </a>
        <img
          src={`https://ghchart.rshah.org/${color}/${user.username}`}
          alt={`Picture of ${user.name}'s activity chart`}
        />
        <a target="_blank" href={`https://www.github.com/${user.username}`}>
          <p>{user.name}</p>
        </a>
        <a target="_blank" href={`https://www.github.com/${user.username}`}>
          <p>{user.username}</p>
        </a>
        <a
          target="_blank"
          href={`https://www.github.com/${user.username}?tab=repositories`}
        >
          {user.repoCount}
        </a>
      </div>
    );
  }
}

export default UserCard;

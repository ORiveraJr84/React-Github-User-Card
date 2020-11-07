import React from "react";
import "./App.css";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "mojombo",
    };
  }

  updateUser = (userName) => {
    this.setState({
      username: userName,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then((successInfo) => {
          console.log(successInfo.data);
          this.setState({
            ...this.state,
            bio: successInfo.data.bio,
            followersCount: successInfo.data.followers,
            followingCount: successInfo.data.following,
            githubLink: successInfo.data.url,
            image: successInfo.data.avatar_url,
            name: successInfo.data.name,
            repoCount: successInfo.data.public_repos,
            username: successInfo.data.login,
          });
          console.log(this.state);
        })
        .catch((errorInfo) => {
          console.log("Error", errorInfo);
        });
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((successInfo) => {
        this.setState({
          bio: successInfo.data.bio,
          followersCount: successInfo.data.followers,
          followingCount: successInfo.data.following,
          githubLink: successInfo.data.url,
          image: successInfo.data.avatar_url,
          name: successInfo.data.name,
          repoCount: successInfo.data.public_repos,
          username: successInfo.data.login,
        });
        console.log(this.state);
      })
      .catch((errorInfo) => {
        console.log("Error", errorInfo);
      });
  }

  render() {
    return (
      <div className="App">
        This is my React app!
        <Form updateUser={this.updateUser} />
        <UserCard user={this.state} />
      </div>
    );
  }
}

export default App;

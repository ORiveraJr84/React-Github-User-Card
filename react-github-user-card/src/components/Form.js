import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleChange = (input) => {
    this.setState({
      username: input.target.value,
    });
    console.log(this.state.username);
  };

  submit = (e) => {
    e.preventDefault();
    this.props.updateUser(this.state.username);
    this.setState({ username: "" });
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button>search</button>
      </form>
    );
  }
}

export default Form;

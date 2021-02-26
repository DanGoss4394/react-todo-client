import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/add-todo",
      data: {
        title: this.state.title,
        done: false,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="app">
        <h1>ToDo List</h1>
        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add ToDo"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;

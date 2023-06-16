import React, { Component } from "react";
import "./click.css";
class click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handlerchange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlerchangecomment = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handelsububmit = (event) => {
    console.log(event);
    alert("submitted");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelsububmit}>
          <div>
            <label>username</label>
            <input
              className="bar"
              type="text"
              value={this.state.username}
              onChange={this.handlerchange}
            ></input>
          </div>
          <div>
            <label>comments</label>
            <textarea
              className="bar"
              value={this.state.comments}
              onChange={this.handlerchangecomment}
            ></textarea>
          </div>
          <div>
            <label></label>
            <select
              className="bar"
              value={this.state.topic}
              onChange={this.handler}
            >
              <option value="react">React</option>
              <option value="Angular">angular</option>
              <option value="Node">Node</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default click;

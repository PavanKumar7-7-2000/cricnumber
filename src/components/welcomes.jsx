import React, { Component } from "react";
import "./welcome.css";
class Welcomes extends Component {
  constructor(pro) {
    super(pro);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
  render() {
    return (
      <div className="color">
        <h1> WELCOME{this.props.name} </h1>;
        <div> count - {this.state.count}</div>
        <button className="style" onClick={() => this.increment()}>
          {" "}
          increment
        </button>
        <button className="style" onClick={() => this.decrement()}>
          {" "}
          decrement
        </button>
      </div>
    );
  }
}
export default Welcomes;

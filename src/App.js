import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }
  decrement = () => {
    if (this.state.counter === 0) {
      this.setState({
        counter: 0,
        error: true
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
        error: false
      });
    }
  };
  increment = () => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const errorClass = this.state.error ? "" : "hidden";

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {/* {this.state.error === true && ( */}
        <p
          data-test="display-error-massage"
          style={{ color: "red" }}
          className={`error ${errorClass}`}
        >
          The counter cannot go below 0
        </p>
        {/* )} */}
        <button data-test="increment-button" onClick={this.increment}>
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={this.decrement}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;

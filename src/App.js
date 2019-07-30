import React from "react";
import "./App.css";
import Valid from "./Components/ValidationComponent/ValidationComponent";
import Char from "./Components/CharComponent/CharComponent";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  textChangeHandler = e => {
    this.setState({
      text: e.target.value
    });
  };

  textDeleteHandler = index => {
    const newText =
      this.state.text.slice(0, index) + this.state.text.slice(index + 1);

    this.setState({
      text: newText
    });
  };

  render() {
    const charList = this.state.text
      .split("")
      .map((ch, index) => (
        <Char
          char={ch}
          key={index}
          onclick={() => this.textDeleteHandler(index)}
        />
      ));

    return (
      <div className="App">
        <h1>React - Assignment #2</h1>
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.text}
        />
        <Valid length={this.state.text.length} />
        <div>{charList}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

import VC from "./Comp/VC";
import CC from "./Comp/CC";

class App extends Component {
  state = {
    what: ""
  };

  inputHandler = e => {
    this.setState({ what: e });
  };

  render() {
    let { what } = this.state;
    let whatLength = what.split("").length;

    return (
      <div className="App">
        <h1>My Thingy</h1>
        <h2>{what}</h2>
        <input
          value={what}
          onChange={e => {
            this.inputHandler(e.target.value);
          }}
        />

        <VC length={whatLength} />
        <CC />
      </div>
    );
  }
}

export default App;

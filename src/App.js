import React, { Component } from "react";
import "./App.css";

import VC from "./Comp/VC";
import CC from "./Comp/CC";

class App extends Component {
  state = {
    what: "",
    arr: []
  };

  inputHandler = e => {
    this.setState({ what: e, arr: e.split("") });
  };

  render() {
    let { what, arr } = this.state;
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
        <CC arr={arr} />
      </div>
    );
  }
}

export default App;

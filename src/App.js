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

  del = ind => {
    let { arr } = this.state;
    let newArr = [...arr];
    newArr.splice(ind, 1);
    let newWhat = newArr.join("");
    this.setState({ what: newWhat, arr: newArr });
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
        <CC arr={arr} del={this.del} />
      </div>
    );
  }
}

export default App;

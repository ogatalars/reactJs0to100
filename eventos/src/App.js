import React, { Component } from "react";
import Membro from "./membro";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bem vindo!</h1>
        <Membro nome="visitante" />
      </div>
    );
  }
}

export default App;

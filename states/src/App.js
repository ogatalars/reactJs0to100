import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      contador: 0,
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
  aumentar() {
    let state = this.state;
    state.nome = "Js";
    state.contador += 1;
    this.setState(state);
  }
  diminuir() {
    let state = this.state;
    state.nome = "Ts";
    state.contador -= 1;
    this.setState(state);
  }
  render() {
    return (
      <div>
        <h3>Contador</h3>
        {this.state.nome}
        <h3>
          <button onliclk={this.diminuir}> - </button>
          {this.state.contador}
          <button onclick={this.aumentar}> + </button>
        </h3>
      </div>
    );
  }
}

export default App;
// states sao dinamicas.

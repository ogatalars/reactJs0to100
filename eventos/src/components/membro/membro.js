import React, { Component } from "react";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
  }
  entrar(nome) {
    this.setState({ nome: nome });
  }
  render() {
    return (
      <div>
        <h1> Bem-vindo(a){this.state.nome}</h1>
        <button onClick={() => this.entrar("Ogata")}>
          {" "}
          Entrar no sistema{" "}
        </button>
      </div>
    );
  }
}

export default Membro;

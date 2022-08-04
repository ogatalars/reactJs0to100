import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <div>
        <h2> Somos a equipe {this.props.nome} </h2>
        <h2> Cargo: {this.props.cargo}</h2>
        <h2> Idade: {this.props.idade}</h2>
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Equipe nome="Equipe 1" cargo="Dev" idade="32" />
      <Equipe nome="Equipe 2" cargo="Dev" idade="32" />
      <Sobre nome="Equipe 1" cargo="Dev" idade="32" />
    </div>
  );
}

export default App;

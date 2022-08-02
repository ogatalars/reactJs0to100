import React from "react";

const Bemvindo = (props) => <h2> Bem-vinde {props.nome}</h2>;
const Olar = (props) => {
  return (
    <div>
      <h2> Eae, tudo bem? </h2>
      <h3> Tenho {props.idade} anos</h3>
    </div>
  );
};

export default function App() {
  return (
    <div>
      {" "}
      <Bemvindo nome="Ogata" />
      <Bemvindo nome="Vitoria" />
      <Olar idade="32" />
      <h2> @ogatalars</h2>
    </div>
  );
}

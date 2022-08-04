import React from "react";

// const Bemvindo = (props) => <h2> Bem-vinde {props.nome}</h2>;
// const Olar = (props) => {
//   return (
//     <div>
//       <h2> Eae, tudo bem? </h2>
//       <h3> Tenho {props.idade} anos</h3>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
//       {" "}
//       <Bemvindo nome="Ogata" />
//       <Bemvindo nome="Vitoria" />
//       <Olar idade="32" />
//       <h2> @ogatalars</h2>
//     </div>
//   );
// }

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Equipe nome="Ogata" cargo="Dev" idade="32" facebook="www.google.com" />
      <Equipe nome="Vitoria" cargo="Dev" idade="32" />
      <Equipe nome="João" cargo="Dev" idade="23" />
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      {/* <a>Instagran</a>
      <a>Twitter</a> */}
    </div>
  );
};
export default App;

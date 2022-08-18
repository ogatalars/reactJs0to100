import React, { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState(["Pagar contas", "Estudar React"]);
  const [nome] = useState("Ogata");
  function handleAdd() {
    setTarefas([...tarefas, nome]);
    setInput("");
  }
  const [input, setInput] = useState("");

  return (
    <div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setTarefas([handleAdd, "Nova tarefa"])}
      >
        Adicionar tarefa
      </button>
      <h1>{nome}</h1>
    </div>
  );
}

export default App;
